const { log } = require('console');
const express = require('express');
const app = express();

const http = require("http");
const path = require("path");

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

// Set up EJS as the template engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
    socket.on("send-location", function (data){
        io.emit("receive-location",{id:socket.id, ...data })
    })
    // console.log("connected");
    socket.on("disconnect",function(){
        io.emit("user-disconnected",socket.id);
    })
});

app.get("/", function (req, res) {
    res.render("index");
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
