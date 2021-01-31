const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"]
      }
});

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
    console.log('user connected!');
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});