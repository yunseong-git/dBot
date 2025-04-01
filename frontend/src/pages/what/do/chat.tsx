import ChatRoom from '@/components/chat/ChatRoom';

export default function ChatPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">💬 공개 채팅방</h1>
      <ChatRoom />
    </div>
  );
}