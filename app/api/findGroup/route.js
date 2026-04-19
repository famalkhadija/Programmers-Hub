import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
export async function POST(req) {
  const { searchQuery } = await req.json();
  const formattedQuery = searchQuery.trim().toLowerCase();

    const publicLanguages = [
    "javascript", "typescript", "java", "python", "php",
    "c++", "c", "c#", "dart", "html", "css", "go", "rust",
    "kotlin", "swift", "ruby", "shell", "r", "sql", "haskell",
    "scala", "elixir", "lua"
  ].map(lang => lang.toLowerCase());
  const q = query(collection(db, 'privateGroups'), where('name', '==', formattedQuery));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    const group = snapshot.docs[0];
    return Response.json({ type: 'private', id: group.id });
  }
  if (publicLanguages.includes(formattedQuery)) {
    return Response.json({ type: 'public', id: formattedQuery });
  }
  
}
