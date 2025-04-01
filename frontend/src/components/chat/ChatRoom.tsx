'use client';

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message } from '@/types/chat'; 
import MessageList from './MessageList';
import ChatInput from './ChatInput';

let socket: Socket;

export default function ChatRoom() {
    const [user, setUser] = useState(`익명${Math.floor(1000 + Math.random() * 9000)}`);
    const [nicknameInput, setNicknameInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
  
    useEffect(() => {
      socket = io('http://localhost:3000/chat');
  
      socket.on('message', (data: any) => {
        setMessages((prev) => [...prev, data]);
      });
      
      socket.on('system', (msg: string) => {
        setMessages((prev) => [...prev, { user: null, message: `[시스템] ${msg}`, time: new Date().toISOString() }]);
      });
  
      return () => {
        socket.disconnect();
      };
    }, []);
  
    const sendMessage = (msg: string) => {
      if (!msg.trim()) return;
      socket.emit('message', { user, message: msg });
    };
  
    const changeNickname = () => {
      if (!nicknameInput.trim()) return;
      setUser(nicknameInput.trim());
      setNicknameInput('');
      setMessages((prev) => [...prev, {
        user: null,
        message: `[시스템] 닉네임이 '${user}' → '${nicknameInput.trim()}' 로 변경되었습니다`,
        time: new Date().toISOString(),
      },]);
    };
  
    return (
      <div className="space-y-4">
        <MessageList messages={messages} />
        <ChatInput onSend={sendMessage} />
  
        {/* 닉네임 변경 UI */}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="닉네임 변경"
            value={nicknameInput}
            onChange={(e) => setNicknameInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && changeNickname()}
            className="border px-2 py-1 rounded flex-1"
          />
          <button
            onClick={changeNickname}
            className="px-4 py-1 bg-gray-600 text-white rounded"
          >
            변경
          </button>
        </div>
      </div>
    );
  }