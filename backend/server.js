const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
const PORT = 8080
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'testpokeapp'
})

app.get('/', (re, res) => {
    return res.json("From Backend Side")
})

app.get('/get-data', (re, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

app.post('/add-data', (req, res) => {
    data = req.body;
    username = data['username'];
    password = data['password'];
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
        if (err) res.send(err);
        else res.send(data);
    });
});

app.listen(PORT, () => {
    console.log("listening");
})