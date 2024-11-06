import Hash from "../Data/encryptor";

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

app.post('/signup', (req, res) => {
    data = req.body;
    username = data['username'];
    password = data['password'];
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
        if (err) return res.status(500).send('Error checking user in database');
        else res.send(data);
    });
});

app.post('/login', (req, res) => {
    data = req.body;
    username = data['username'];
    password = data['password'];
    const query = 'SELECT username FROM users WHERE username = ?';
    db.query(query, [username], (err, result) => {
        if (err) return res.status(500).send('Error checking user in database');
        else {
            if (result.length === 0) {
                return res.status(404).send('User not found');
            }

            const storedPassword = result[0].password;
            
            if (Hash(password) != storedPassword) {
                return res.status(404).send('Password is incorrect');
            }

            res.status(200).send('User authenticated successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log("listening");
})