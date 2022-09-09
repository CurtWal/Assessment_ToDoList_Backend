express = require('express');
const ToDoModel = require('../Model/ToDoListModel');
const router = express.Router();

router.post('/new-todo', async (req, res) => {
    try {
        const newToDo = await ToDoModel.create(req.body);
        res.send(newToDo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error creating ToDoList");
    }
});

module.exports = router;