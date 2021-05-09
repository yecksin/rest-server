import Server from "./classes/server";
import router from "./routes/router";
import bodyParser from "body-parser";
import express from 'express';

const server = new Server();
// body parser
server.app.use(express.urlencoded({extended:true}));
server.app.use(express.json())
server.app.use('/',router)

server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
})