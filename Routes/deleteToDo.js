express = require('express');
const ToDoModel = require('../Model/ToDoListModel');
const router = express.Router();

router.delete('/todo/:id', async (req, res) => {
    try {
        let toDeleteId = req.params.id;
        await ToDoModel.deleteOne({_id: {$eq: toDeleteId}})
        res.status(200).send('ToDo has been deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(404).send('Unable to find ToDo');
    }
})

module.exports = router;