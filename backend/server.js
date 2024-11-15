require('dotenv').config({ path: '../.env' });

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express()
const PORT = 8080
const secureCompare = require('secure-compare')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// app.get('/get-data', (re, res) => {
//     const query = 'SELECT * FROM users';
//     db.query(query, (err, result) => {
//         if (err) res.send(err);
//         else res.send(result);
//     });
// });

app.post('/signup', (req, res) => {
    data = req.body;
    username = data['username'];
    password = data['password'];
    const query = 'INSERT INTO user_info_cool (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
        if (err) return res.status(500).send('Error checking user in database');
        else res.send(data);
    });
});

app.post('/login', (req, res) => {
    data = req.body;
    username = data['username'];
    password = data['password'];
    const query = 'SELECT username, password FROM user_info_cool WHERE username = ?';
    db.query(query, username, (err, result) => {
        if (err) return res.send(err)
        else {
            if (result.length === 0) {
                res.status(404).send('Incorrect Username/Password');
                return
            } else if (result.length > 1) {
                res.status(404).send('User already exists.');
                return
            }

            const storedPassword = result[0].password;

            if (!secureCompare(storedPassword, password)) {
                res.status(404).send('Incorrect Username/Password');
                return
            } else {
                res.status(200).send('User authenticated successfully');
                return
            }
        }
    });
});

app.get('/get_all_sets', (req, res) => {
    const query = "SELECT * FROM sets";
    db.query(query, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

app.post('/add_set', (req, res) => {
    const data = req.body;
    const username = data.username;
    const setId = data.setId;

    const query1 = "SELECT userId FROM user_info_cool WHERE username = ?";
    db.query(query1, username, (err1, result1) => {
        if (err1) {
            res.status(500).send(err1);
            return;
        }
        if (result1.length === 0) {
            res.status(404).send('User not found');
            return;
        }

        const userId = result1[0].userId;

        const query2 = "INSERT INTO user_sets (userId, setId) VALUES (?, ?)";
        db.query(query2, [userId, setId], (err2, result2) => {
            if (err2) {
                res.status(500).send(err2);
                return;
            }
            if (result2.affectedRows === 0) {
                res.status(200).send('Set added');
                return;
            }
        });
    });
});

app.listen(PORT, () => {
    console.log("listening");
})