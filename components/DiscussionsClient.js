"use client";
import { FaCheckDouble } from "react-icons/fa";
import StickyBar from "@/components/StickyBar";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import {
  addDoc,
  doc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useSession } from "next-auth/react";
import { FiCopy, FiCornerUpLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
export default function DiscussionsClient() {
  const { data: session } = useSession();
  const currentUser = session?.user?.email || session?.user?.id;
  const params = useParams();
  const group = params?.group;
  const groupName = group
    .replace("plus", "+")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "groups", group, "messages");
  const messagesEndRef = useRef(null);
  const [showNoInternet, setShowNoInternet] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    message: null,
  });
  const [showReply, setShowReply] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const slug = group
    ?.toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/\./g, "")
    .replace(/\s/g, "");

  useEffect(() => {
    setMounted(true);
  }, []);

  const sendIcon = !mounted
    ? "/send.png"
    : resolvedTheme === "dark"
      ? "/send2.png"
      : "/send.png";

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    if (!group) return;

    const messagesRef = collection(db, "groups", group, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(loadedMessages);
    });

    return () => unsubscribe();
  }, [group]);
  const handleSeen = async (msgId, sender) => {
    if (sender === currentUser) return;
    try {
      const msgDoc = doc(db, "groups", group, "messages", msgId);
      const message = messages.find((m) => m.id === msgId);
      if (
        message &&
        (message.status === "delivered" || message.status === "sent")
      ) {
        await updateDoc(msgDoc, { status: "seen" });
      }
    } catch (error) {
      console.error("Error updating to seen:", error);
    }
  };
  //delete
  // const deleteMessage = async (group, messageId) => {
  //   try {
  //     const msgRef = doc(db, "groups", group, "messages", messageId);
  //     await deleteDoc(msgRef);
  //     console.log("Message deleted successfully");
  //   } catch (error) {
  //     console.error("Error deleting message:", error);
  //   }
  // };
  //handlesend
  const handleSend = async () => {
    if (!session) {
      alert("Login required to send messages");
      return;
    }
    if (!newMessage.trim()) return;
    if (!navigator.onLine) {
      setShowNoInternet(true);
      setTimeout(() => setShowNoInternet(false), 3000);
    }
    try {
      const msg = {
        text: newMessage,
        sender: currentUser,
        senderName: session?.user?.name || "Anonymous",
        timestamp: serverTimestamp(),
        status: "sent",
        replyTo: replyTo ? replyTo.id : null,
      };

      await addDoc(messagesRef, msg);

      setNewMessage("");
      if (replyTo) setReplyTo(null);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };
  function onMessageRightClick(event, message) {
    event.preventDefault();

    const menuHeight = 130;
    const menuWidth = 160;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    let posY =
      event.clientY + menuHeight > windowHeight
        ? event.clientY - menuHeight
        : event.clientY;

    let posX =
      event.clientX + menuWidth > windowWidth
        ? event.clientX - menuWidth
        : event.clientX;

    setContextMenu({
      visible: true,
      x: posX,
      y: posY,
      message,
    });
  }
  function Message({ msg, isMe }) {
    const ref = useRef();
    const [expanded, setExpanded] = useState(false); // per message state here
    const limit = 250;
    const isLong = msg.text.length > limit; // msg.text, not msg

    useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            handleSeen(msg.id, msg.sender);
          }
        },
        { threshold: 1.0 },
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [msg.id, msg.sender]);
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (
          contextMenu.visible &&
          menuRef.current &&
          !menuRef.current.contains(e.target)
        ) {
          setContextMenu({ ...contextMenu, visible: false });
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [contextMenu]);

    return (
      <>
        {showNoInternet && (
          <div className="fixed top-0 left-0 right-0 bg-black text-white text-center py-2 z-50">
            No internet connection. Message not sent.
          </div>
        )}
        {contextMenu.visible && (
          <div
            ref={menuRef}
            style={{
              position: "fixed",
              top: contextMenu.y,
              left: contextMenu.x,
              background: "white",
              border: "1px solid gray",
              zIndex: 1000,
              padding: "8px 0",
              borderRadius: "10px",
              minWidth: "150px",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.1)",
            }}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div
              className="flex items-center gap-5 px-5 py-2 hover:bg-gray-100 "
              onClick={() => {
                setReplyTo({
                  id: contextMenu.message.id,
                  text: contextMenu.message.text,
                });
                setContextMenu({ ...contextMenu, visible: false });
              }}
            >
              <FiCornerUpLeft size={16} /> Reply
            </div>
            <div
              className="flex items-center gap-5 px-5 py-2 hover:bg-gray-100 "
              onClick={() => {
                navigator.clipboard.writeText(contextMenu.message.text || "");
                setContextMenu({ ...contextMenu, visible: false });
              }}
            >
              <FiCopy size={16} /> Copy
            </div>
          </div>
        )}

        <div
          ref={ref}
          id={`msg-${msg.id}`}
          onContextMenu={(e) => onMessageRightClick(e, msg)}
          className={` transition-all duration-700 max-w-[50%] min-w-[130px] w-fit px-2 pt-2 pb-1 rounded-xl overflow-hidden 
          break-words whitespace-pre-wrap 
          ${
            isMe
              ? "bg-[#76a5f0] dark:bg-[#5677ad]  self-end ml-auto text-white dark:text-white"
              : "bg-white dark:bg-gray-800 self-start mr-auto text-black dark:text-white"
          }`}
          style={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          {!isMe && msg.senderName && (
            <strong className="block text-sm dark:text-white text-blue-700">
              {msg.senderName}
            </strong>
          )}

          <div className="flex flex-col relative ">
            {/* ✅ Reply Preview Box */}
            {msg.replyTo && (
              <div
                onClick={() => {
                  const el = document.getElementById(`msg-${msg.replyTo}`);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                    el.classList.add("!bg-gray-300");
                    setTimeout(() => {
                      el.classList.remove("!bg-gray-300");
                    }, 1000);
                  }
                }}
                className={`cursor-pointer
                  ${
                    isMe
                      ? " hover:shadow-[1px_1px_16px_gray] shadow-[1px_1px_7px_gray]"
                      : " hover:shadow-[1px_1px_5px_gray] shadow-[1px_1px_3px_gray]"
                  }
                 
    text-sm text-gray-700 dark:text-gray-300 bg-[#f9f9f9] dark:bg-zinc-700
    p-2 rounded-md mb-2 border-l-4 border-blue-700`}
              >
                <div className="text-xs text-blue-600 dark:text-white font-semibold mb-1 select-none">
                  Replying to:
                </div>
                <div className="truncate select-none">
                  {messages.find((m) => m.id === msg.replyTo)?.text}
                </div>
              </div>
            )}

            {/* Message Text */}
            {expanded || !isLong ? msg.text : msg.text.slice(0, limit) + "..."}
            {isLong && (
              <button
                className="self-start text-blue-700 bg-none border-none cursor-pointer text-sm dark:text-blue-950"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}

            {/* Time and Status */}
            <span className="break-words w-full mt-5 "></span>
            {msg.timestamp?.seconds && (
              <span
                className={`absolute bottom-0 text-xs flex self-end gap-2 ${
                  isMe ? "text-white" : "text-gray-500"
                }`}
              >
                {new Date(msg.timestamp.seconds * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}

                {isMe && (
                  <>
                    {msg.status === "sent" && (
                      <FaCheckDouble className="text-gray-50 text-sm" />
                    )}
                    {msg.status === "seen" && (
                      <FaCheckDouble className="text-blue-800 text-sm" />
                    )}
                  </>
                )}
              </span>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className=" flex h-full w-full ">
        <StickyBar />
        <div className=" text-black h-[calc(100vh-16vh)] xl:w-[79%] lg:w-[75%] md:w-[70%] w-[calc(100%-43px)]">
          <div className="flex justify-between items-center dark:border-b dark:border-blue-700  md:dark:border md:dark:border-blue-700 pt-[6px] bg-white dark:bg-black dark:text-white ">
            <h1 className="md:text-xl text-lg px-4 font-bold mb-2">
              {groupName} Discussion
            </h1>
            <div className="flex md:gap-4 gap-2 px-2">
              <Link href={`/solveQuiz/${slug}`}>
                <button
                  onClick={() => router.push("/solveQuiz")}
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm md:px-5  py-2.5 text-center me-2 mb-2 shadow-[1px_1px_4px_gray] hover:shadow-[1px_1px_8px_gray] md:w-fit w-20"
                >
                  Solve Quiz
                </button>
              </Link>
            </div>
          </div>
          <div className="relative h-full md:text-md text-sm overflow-hidden md:border-none dark:border-l border-blue-500 ">
            <div
              className="absolute inset-0 -z-10 h-full w-full bg-white 
            bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
  bg-[size:4rem_3rem]  "
            >
              <div className="absolute inset-0 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_0%_200px,#95bdf7,transparent)]"></div>
            </div>

            {/* Messages */}
            <div
              ref={messagesEndRef}
              className={`flex-1 overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent relative w-full z-10 h-[calc(100%-3.5rem)] space-y-2 p-4 ${
                replyTo ? "pb-20" : "pb-7"
              } ${contextMenu.visible ? "overflow-y-hidden" : "overflow-y-auto"}`}
            >
              {messages.map((msg) => {
                const isMe = msg.sender === currentUser;
                return <Message key={msg.id} msg={msg} isMe={isMe} />;
              })}
            </div>

            {/* Input */}
            {/* Container at bottom with reply preview above input */}
            <div className="absolute bottom-0 left-0 w-full z-20 bg-white dark:bg-black border-t dark:border-blue-500 md:border md:dark:border-blue-500 flex flex-col px-2 py-1">
              {replyTo && (
                <div
                  className="reply-preview"
                  style={{
                    borderLeft: "3px solid #4a90e2",
                    padding: "8px 28px 8px 8px",
                    marginBottom: "8px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "6px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#555",
                    }}
                  >
                    {" "}
                    Replying to:{" "}
                    {messages.find((m) => m.id === replyTo?.id)?.text}
                  </div>
                  <div style={{ color: "#333" }}>
                    {replyTo.text?.slice(0, 50)}
                    {replyTo.text?.length > 50 ? "..." : ""}
                  </div>
                  <button
                    onClick={() => setReplyTo(null)}
                    style={{
                      position: "absolute",
                      width: "26px",
                      height: "26px",
                      top: "6px",
                      right: "10px",
                      cursor: "pointer",
                      borderRadius: "25px",
                      border: "2px solid black",
                      background: "white",
                    }}
                    aria-label="Cancel reply"
                  >
                    ×
                  </button>
                </div>
              )}

              {/* Input row */}
              <div className="flex items-center w-full border rounded-3xl">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message"
                  className="w-full pl-5 outline-none bg-transparent text-black dark:text-white rounded"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                />

                <img
                  onClick={handleSend}
                  src={sendIcon}
                  alt="send"
                  className="w-12 cursor-pointer px-4 py-4 ml-2 hover:bg-blue-50 dark:hover:bg-zinc-700 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
