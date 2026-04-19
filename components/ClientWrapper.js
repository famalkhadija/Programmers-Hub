'use client';
import { SearchProvider } from '@/context/SearchContext';

export default function ClientWrapper({ children }) {
  return <SearchProvider>{children}</SearchProvider>;
}
