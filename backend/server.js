const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require("dotenv").config();

const app = express ();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://Danon:Danonino@cluster0.dntmts1.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established succesfully")
})

const tpostRouter = require('./routes/tpost')
const userRouter = require('./routes/user')

app.use('/tpost', tpostRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log ( `Server is running on port : ${port}`);
});