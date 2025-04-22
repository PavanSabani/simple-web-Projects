const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const todoSchema = new mongoose.Schema({ task: String });
const Todo = mongoose.model('Todo', todoSchema);

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const newTodo = new Todo({ task: req.body.task });
    await newTodo.save();
    res.json(newTodo);
});

app.delete('/todos/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000'));

app.get('/', (req, res) => {
    res.send('Welcome to the To-Do API!');
});

