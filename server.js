const express = require('express')

const app = express()

const http = require('http').createServer(app)

const PORT = process.env.PORT || 3030


http.listen(PORT,()=>{
    console.log(`Server running on PORT http://localhost:${PORT}`);
})

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

// socket

const io = require('socket.io')(http)

io.on('connection',(socket)=>{
    console.log('Connected');
})

