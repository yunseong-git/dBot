'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { saveToKeeplist } from '@/utils/keeplist';

export default function WhatEatHeader() {
  const [type, setType] = useState('all');
  const [randomFood, setRandomFood] = useState<any | null>(null);
  const router = useRouter();

  const getRandom = async () => {
    const res = await fetch(`http://localhost:3000/what/eat/random?type=${type}`);
    const data = await res.json();
    setRandomFood(data);
  };

  const handleKeep = () => {
    if (!randomFood) return;
    saveToKeeplist({ _id: randomFood._id, name: randomFood.name });
    alert('🧺 킵 리스트에 저장했어요!');
  };

  const handleSelect = () => {
    if (!randomFood) return;
    router.push(`/what/eat/${randomFood._id}`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">🍽️ 오늘 뭐 먹을까?</h1>

      <div className="space-x-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">아무거나</option>
          <option value="한식">한식</option>
          <option value="중식">중식</option>
          <option value="양식">양식</option>
        </select>

        <button
          onClick={getRandom}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          뭐 먹지?
        </button>
      </div>

      {randomFood && (
        <div className="border p-4 rounded shadow space-y-2">
          <p className="font-semibold">👉 추천: {randomFood.name}</p>
          <div className="flex gap-2">
            <button
              onClick={handleSelect}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              ✅ 이걸로 하자!
            </button>
            <button
              onClick={handleKeep}
              className="px-4 py-2 bg-orange-400 text-white rounded"
            >
              🧺 일단 킵!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
