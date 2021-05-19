const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http)

io.on("connection", (socket) =>{

    socket.on("msg", (data) =>{
        console.log(data)
          /*
                Também podemos usar o:
                    io.emit() - Envia pra todo mundo
                    socket.broadcast.emit() - Envia pra todos menos para o cliente que enviou
            */
        io.emit("showmsg",data);
        
    });

});

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    return res.render("index.ejs", {})
})


http.listen(3000, (err) =>{
    if(err){
        console.log(err)
    } else {
        console.log(`Socket.io is running!`)
    }
})