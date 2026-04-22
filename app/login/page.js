"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameInput, setNameInput] = useState("");
  const handleContinue = async (e) => {
    e.preventDefault();
    if (!email || !nameInput.trim()) {
      alert("Please enter your name and email.");
      return;
    }
    try {
      const userRef = doc(db, "users", email);
      await setDoc(userRef, {
        name: nameInput.trim(),
        email: email,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error(" Firestore error:", error);
      alert("Failed to save name. Try again.");
      return;
    }
    const res2 = await signIn("email", {
      email,
      redirect: false,
    });
    if (res2?.ok) {
      setMessage(" Check your email for a verification link.");
    } else {
      setMessage("Failed to sign in.");
    }
  };
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="mx-auto my-10 md:my-24">
          <div className="text-center">Signed in as {session.user.email} </div>{" "}
          <br />
          <div className="text-center">
            <button
              className=" dark:hover:bg-black dark:border-none px-4 py-2 border rounded-md text-sm hover:bg-slate-50"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#a69bc4_100%)]  pt-4 md:pt-8 pb-20">
      <div className=" dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#a69bc4_100%)] dark:text-white lg:w-[770px] sm:w-[400px] w-[320px] flex mx-auto rounded-xl border border-gray-300">
        <div className="login-card sm:px-8 pt-8 py-3 flex flex-col items-center ">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <div className=" text-gray-500">Login to your account</div>
          <div>
            <div className="mt-4">Enter Your Name</div>

            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Your name"
              className=" w-60 sm:w-80 border border-gray-300 px-2 py-1 rounded-md"
            />
            <div className="mt-4">Enter Your Email</div>
            <input
              className=" w-60 sm:w-80 border border-gray-300 px-2 py-1 rounded-md"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            onClick={handleContinue}
            className="w-60 sm:w-80 py-2 rounded-lg text-white bg-slate-500 hover:bg-slate-400 my-3" 
          >
            Continuee
          </button>
          {message && <p className="mt-4 text-gray-500">{message}</p>}
          <div className="w-[80%] flex items-center gap-4 mt-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm text-gray-500 whitespace-nowrap">
              Or continue with
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            onClick={() => {
              signIn("github");
            }}
            className="flex items-center w-60 my-5 space-x-5 border border-gray-300 p-3"
          >
            <FaGithub className="w-6 h-6" />
            <span>Sign in with Github</span>
          </button>
          <button
            onClick={() => {
              signIn("google");
            }}
            className="flex items-center w-60 space-x-5 border border-gray-300 p-3"
          >
            <FcGoogle className="w-6 h-6" />
            <span>Sign in with Google</span>
          </button>
          <div className="text-sm my-4">
            {" "}
            Don&apos;t have an account?{" "}
            <Link className="underline" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="login-img hidden lg:block">
          <img
            className="h-full object-cover rounded-tr-xl rounded-br-xl"
            src="/img1.jpg"
            alt="login image"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
