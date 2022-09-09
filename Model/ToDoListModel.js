const mongoose = require('mongoose');

const toDoListSchema = new mongoose.Schema({
    ToDo: {
        type: String,
        required: true,
    }
})

const toDoListModel = new mongoose.model('toDoList',toDoListSchema )


module.exports= toDoListModel;