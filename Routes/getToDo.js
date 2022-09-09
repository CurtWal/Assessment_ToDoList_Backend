express = require('express');
const ToDoModel = require('../Model/ToDoListModel');
const router = express.Router();

router.get('/', async (req, res) => {
    const myToDo = await ToDoModel.find({});
    res.send(myToDo);
})

module.exports = router;