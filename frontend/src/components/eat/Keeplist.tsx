'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { removeFromKeeplist } from '@/utils/keeplist';

type KeepItem = {
  _id: string;
  name: string;
};

export default function Keeplist() {
  const [keepList, setKeepList] = useState<KeepItem[]>([]);
  const router = useRouter();

  const loadKeeplist = () => {
    const stored = localStorage.getItem('keepList');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setKeepList(parsed.slice(0, 10));
      } catch (err) {
        console.error('Invalid keepList:', err);
      }
    }
  };

  useEffect(() => {
    loadKeeplist();
    window.addEventListener('keeplist-updated', loadKeeplist);
    return () => window.removeEventListener('keeplist-updated', loadKeeplist);
  }, []);

  const handleRemove = (id: string) => {
    removeFromKeeplist(id);
  };

  return (
    <div className="w-full p-4 mt-6 bg-gray-50 border rounded shadow">
      <h2 className="text-lg font-bold mb-2">🧺 킵 리스트</h2>
      {keepList.length === 0 ? (
        <p className="text-sm text-gray-400">아직 킵된 메뉴가 없어요.</p>
      ) : (
        <ul className="space-y-2">
          {keepList.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center cursor-pointer hover:text-blue-600"
            >
              <span onClick={() => router.push(`/what/eat/${item._id}`)}>
                {item.name}
              </span>
              <button
                onClick={() => handleRemove(item._id)}
                className="text-red-500 text-sm ml-2 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}