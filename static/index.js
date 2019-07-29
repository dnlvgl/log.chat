const socket = io();

const submit = msg => {
  socket.emit("chat message", msg);
};

socket.on("chat message", msg => {
  console.log(msg);
});
