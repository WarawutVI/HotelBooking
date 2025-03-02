const express = require('express');
const cors = require("cors");


const app= express();

const dbconfig =require('./db');
const roomsRoute =require('./routers/roomsRouter')
app.use(cors()); // Allow frontend to connect to backend

app.use(express.json());
app.use('/api/rooms',roomsRoute)

const port =process.env.PORT|| 5000;

app.listen(port ,() => console.log(`Server running on port ${port}`) );
