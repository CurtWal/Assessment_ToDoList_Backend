"use strict";

require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Port = process.env.PORT || 3004;
// const ToDoModel = require('./Model/ToDoListModel');
const getToDo = require('./Routes/getToDo');
const createToDo = require('./Routes/createToDo');
const deleteToDo = require('./Routes/deleteToDo');
const updateToDo = require('./Routes/updateToDo');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


mongoose
  .connect(process.env.MONGODB_SERVER)
  .then(() => console.log("Connected to Mongoose"))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome')
}   
)

// const toDoData = async (req, res) => {
//     try {
//         let todo1 = new ToDoModel({
//             ToDo: "Wash Dishes"
//         });
//         let todo2 = new ToDoModel({
//             ToDo: " Wash Dogs"
//         })
//         await todo1.save();
//         await todo2.save();
//     }catch (e) {
//         console.log(e);
//     }
// };
// toDoData();

app.use('/todo',getToDo);
app.use(createToDo);
app.use(deleteToDo);
app.use('/updatetodo',updateToDo);
app.listen(Port, () => console.log(`listening on ${Port}`));