const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors:{
    origin : "*"
  }
});

const cors = require('cors');

app.use(cors);

io.on("connection", (socket)=>{
  console.log("Connect Socket");

  socket.on("test", ()=>{
    console.log("Test berhasil - I love you!");
  });

});

http.listen(9999);