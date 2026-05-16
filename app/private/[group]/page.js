import PrivateDiscussClient from "@/components/PrivateDiscussClient";
export async function generateMetadata({ params }) {
  const rawGroup = params?.group || "";

  const groupName = rawGroup
    .replace(/plus/g, "+")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${groupName} Discussion`,
    description: `Discuss ${groupName} with other members`,
  };
}

export default function GroupPage() {
 return <PrivateDiscussClient />;
}
