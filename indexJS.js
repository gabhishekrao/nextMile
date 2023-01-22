const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = process.env.PORT || 3000


http.listen(PORT, () => {
    console.log(`My server is running on prot number ${PORT}`);
})


app.use(express.static(__dirname + '/controller'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/indexHtml.html')

})


// Socket.io


io.on('connection', (socket) => {
    console.log("socket.io connected");

    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
})

})
