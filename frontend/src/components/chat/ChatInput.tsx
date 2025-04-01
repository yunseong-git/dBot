import { useState } from 'react';

export default function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSend(input);
    setInput('');
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="메시지를 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        className="border px-2 py-1 rounded flex-1"
      />
      <button
        onClick={handleSend}
        className="px-4 py-1 bg-blue-500 text-white rounded"
      >
        보내기
      </button>
    </div>
  );
}