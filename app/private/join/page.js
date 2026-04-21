'use client';
export const dynamic = "force-dynamic";
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function InviteJoinPage() {
  const searchParams = useSearchParams();
  const groupId = searchParams.get('group');
  const token = searchParams.get('token');

  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!groupId || !token) {
      setMessage('Invalid invite link.');
      setLoading(false);
      return;
    }

    if (status === 'authenticated') {
      const joinGroup = async () => {
        try {
          const res = await fetch('/api/private/join', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ groupId, token }),
          });

          const data = await res.json();

          if (res.ok) {
            setMessage(' Successfully joined the group!');
            router.push(`/private/${groupId}`);
          } else {
            setMessage(` ${data.error}`);
          }
        } catch (err) {
          setMessage(' Something went wrong. Try again.');
        } finally {
          setLoading(false);
        }
      };

      joinGroup();
    } else if (status === 'unauthenticated') {
      setLoading(false);
    }
  }, [status, groupId, token]);

  if (loading || status === 'loading') return <p>Joining group...</p>;

  if (status === 'unauthenticated') {
    return (
      <div className="p-4 text-center text-lg">
        <p>Please <button onClick={() => signIn()} className="text-blue-500 underline">login</button> to join the group.</p>
      </div>
    );
  }

  return <div className="p-4 text-center text-lg">{message}</div>;
}
