import PrivateDiscussClient from "@/components/PrivateDiscussClient";

export async function generateMetadata({ params }) {
  const rawGroup = params?.group || "";

  // email remove
  const groupOnly = rawGroup.split("_").slice(1).join(" ");

  const groupName = decodeURIComponent(groupOnly)
    .replace(/plus/g, "+")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${groupName} | Programmers Discussion Hub`,
    description: `Discuss ${groupName} with other members`,
  };
}

export default function GroupPage() {
  return <PrivateDiscussClient />;
}