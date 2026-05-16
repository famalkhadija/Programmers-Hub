import DiscussionsClient from "@/components/DiscussionsClient";
export async function generateMetadata({ params }) {
  const rawGroup = params?.group || "";

  const groupName = rawGroup
    .replace(/plus/g, "+")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${groupName} Discussion | Programmers Discussion Hub`,
    description: `Join ${groupName} programming discussions`,
  };
}
export default function GroupPage() {
  return <DiscussionsClient />;
}
