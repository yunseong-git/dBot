import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({ namespace: '/chat', cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatService) {}

  // 유저 접속 시
  handleConnection(client: Socket) {
    client.data.nickname = `익명${Math.floor(1000 + Math.random() * 9000)}`;
    console.log(`🔌 ${client.data.nickname} connected`);
    client.broadcast.emit('system', `🙋 ${client.data.nickname} 님이 입장했습니다`);
  }

  // 유저 접속 종료 시
  handleDisconnect(client: Socket) {
    client.broadcast.emit('system', `👋 ${client.data.nickname} 님이 퇴장했습니다`);
  }

  // 메시지 수신
  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: { user: string; message: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.data.nickname = data.user;
  
    const payload = {
      user: data.user,
      message: data.message,
      time: new Date().toISOString(),
    };
  
    this.server.emit('message', payload);
  }
}