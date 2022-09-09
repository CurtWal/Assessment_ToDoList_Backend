express = require('express');
const ToDoModel = require('../Model/ToDoListModel');
const router = express.Router();

router.put('/:id', async (req, res) => {
    const todoid = req.params.id;
try {
    const newToDo = await ToDoModel.findByIdAndUpdate({ _id: todoid }, req.body, {
        new: true,
    })
    res.send(newToDo);
} catch (error) {
    console.log(error);
    res.status(404).send("Unable to update todo");
}
})

module.exports = router;