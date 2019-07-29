const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 3000;

app.use("/static", express.static(__dirname + "/static"));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
io.on("connection", socket => {
  socket.on("chat message", msg => io.emit("chat message", msg));
});

http.listen(port, () => console.log(`listening on port ${port}!`));
