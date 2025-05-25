// server/server.js

const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const clients = new Set();

wss.on('connection', (ws) => {
  console.log('✅ A new client connected.');
  clients.add(ws);

  // Send a welcome message to the connected client
  ws.send(JSON.stringify({ sender: 'Server 🤖', text: 'Welcome to the chat!' }));

  ws.on('message', (message) => {
    console.log('📩 Received:', message);

    let parsedMessage;
    try {
      parsedMessage = JSON.parse(message);
    } catch (err) {
      console.error('❌ Invalid message format:', err.message);
      return;
    }

    // Broadcast the message to all clients
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });

  ws.on('close', () => {
    console.log('❎ A client disconnected.');
    clients.delete(ws);
  });
});

// Start the server on port 8080
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`🚀 WebSocket server is running at ws://localhost:${PORT}`);
});
