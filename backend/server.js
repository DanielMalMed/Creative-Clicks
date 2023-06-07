const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')

require("dotenv").config();

const app = express ();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://Danon:Danonino@cluster0.dntmts1.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
const connection = mongoose.connection;

// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

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