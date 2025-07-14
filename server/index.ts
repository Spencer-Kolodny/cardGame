import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }           
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('join-room', (roomId: string) => {
    socket.join(roomId);
    socket.data.roomId = roomId; 
    const clientsSet = io.sockets.adapter.rooms.get(roomId) || new Set();
    io.to(roomId).emit('player-joined', { playerId: socket.id, allPlayerIds: Array.from(clientsSet) });
  });

  socket.on('disconnect', () => {
    const roomId = socket.data.roomId;
    const clientsSet = io.sockets.adapter.rooms.get(roomId) || new Set();
    io.to(roomId).emit('player-left', { playerId: socket.id, allPlayerIds: Array.from(clientsSet) });
  });
});

server.listen(4000, () => {
  console.log('Socket.IO server running on port 4000');
});