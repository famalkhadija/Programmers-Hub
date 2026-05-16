import { Suspense } from "react";
import JoinClient from "@/components/JoinClient";

export const metadata = {
  title: "Join Group | Programmers Discussion Hub",
  description: "Join private programming groups and discussions",
};

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <JoinClient />
    </Suspense>
  );
}