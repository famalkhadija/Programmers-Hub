'use client';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const InviteLinkBox = ({ groupId }) => {
  const [inviteToken, setInviteToken] = useState(null);
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInviteToken = async () => {
            const decodedGroupId = decodeURIComponent(groupId); 

      try {
        const groupDoc = await getDoc(doc(db, 'privateGroups', decodedGroupId));
        if (groupDoc.exists()) {
          const data = groupDoc.data();
          setInviteToken(data.inviteToken);
        } else {
          console.error('Group does not exist');
        }
      } catch (error) {
        console.error('Error fetching invite token:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInviteToken();

    const timer = setTimeout(() => {
      setVisible(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, [groupId]);

  if (!visible || loading || !inviteToken) return null;

  const inviteUrl = `${window.location.origin}/private/join?group=${groupId}&token=${inviteToken}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-blue-100 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 shadow z-50 w-[90%] md:w-auto">
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-sm">Send link to others to join this discussion</p>
        <button
          onClick={handleClose}
          className="text-gray-600 dark:text-gray-300 text-2xl leading-none ml-4"
        >
          &times;
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white text-sm"
          value={inviteUrl}
          readOnly
        />
        <button
          type="button"
          onClick={handleCopy}
          className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500 cursor-pointer text-sm"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default InviteLinkBox;
