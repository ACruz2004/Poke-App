const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
const PORT = 8080
const secureCompare = require('secure-compare')

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
    const query = 'SELECT username, password FROM users WHERE username = ?';
    db.query(query, username, (err, result) => {
        if (err) return res.send(err)
        else {
            if (result.length === 0) {
                res.status(404).send('Incorrect credentials');
                return
            }

            const storedPassword = result[0].password;
            
            if (!secureCompare(storedPassword, password)) {
                res.status(404).send('Incorrect credentials');
                return
            } else {
                res.status(200).send('User authenticated successfully');
                return
            }
        }
    });
});

app.listen(PORT, () => {
    console.log("listening");
})