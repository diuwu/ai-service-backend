import express from "express";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>docker init</h1>");
});

app.listen(3030);
