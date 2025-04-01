import { useEffect, useRef } from 'react';
import { Message } from '@/types/chat';

export default function MessageList({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="border p-4 h-64 overflow-y-scroll bg-white shadow text-sm">
      {messages.map((msg, i) => (
        <div key={i}>
          <span className="text-gray-500 mr-2">
            [{new Date(msg.time).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}]
          </span>
          {msg.user ? `${msg.user}: ${msg.message}` : msg.message}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}