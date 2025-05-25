# 💬 Real-Time Chat Application

A real-time chat app built using **React.js** for the frontend and **WebSockets** for live communication. 
This app enables users to chat instantly with each other, similar to WhatsApp-style chat.

## 🚀 Features

- Real-time two-way messaging using WebSockets
- Responsive UI with a clean, modern chat interface
- Auto-scroll to the latest message
- Username input on join
- Server broadcast to all connected clients
- Unique styling for "me" vs "others"

## 🛠 Tech Stack

- **Frontend:** React.js, Plain CSS
- **Backend:** Node.js, WebSocket (WS)


## 📁 Project Structure

codtech-chat-app/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ │ └── Chat.js
│ │ │ └── Chat.css
│ │ └── App.js
│ │ └── index.js
│ └── public/
├── server/ # Node.js WebSocket server
│ └── server.js
├── package.json
└── README.md


### 📦 Backend (WebSocket Server)

Open terminal and navigate to `server/`:
    cd server
   
Install dependencies:
npm install

Start the WebSocket server:
node server.js
The server will run at ws://localhost:8080.

## 🖥 Frontend (React Client)
Open a new terminal and navigate to client/:
cd client

Install frontend dependencies:
npm install

Start the React app:
npm start
App will open in your browser at http://localhost:3000.

## 📸 Screenshots
Add your screenshots here if available.

## ✅ To Do
Add user typing indicators

Add emojis or media support

Add user online/offline indicators

Store message history (e.g., with MongoDB)

## 📄 License
This project is licensed under the MIT License.
