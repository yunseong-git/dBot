import { useEffect, useState } from 'react';

type Menu = {
  id: string;
  name: string;
  type?: string;
};

export default function WhatEatPage() {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/what/eat/init')
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🍱 오늘 뭐 먹을까?</h1>
      <ul className="space-y-2">
        {menus.map((menu) => (
          <li key={menu.id} className="p-4 border rounded shadow">
            <p className="font-semibold">{menu.name}</p>
            <p className="text-sm text-gray-500">{menu.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}