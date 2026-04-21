import { Suspense } from "react";
import JoinClient from "@/components/JoinClient";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <JoinClient />
    </Suspense>
  );
}