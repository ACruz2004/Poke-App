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

app.get('/get_all_mySets', (req, res) => {
    const query = `
        SELECT A.*, B.progress
        FROM sets AS A
        JOIN user_sets AS B ON A.setId = B.setId
        JOIN user_info_cool AS C ON B.userId = C.userId
        WHERE C.username = ?;
    `;

    const username = req.query.username;

    db.query(query, username, (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send(result)
    });
});

app.get('/get_cards', (req, res) => {
    const query = `
        SELECT A.*, B.setName
        FROM cards AS A
        JOIN sets AS B ON A.setId = B.setId
        WHERE A.setId = 1;
    `;

    const setId = req.query.setId;

    db.query(query, setId, (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send(result)
    });
});

app.get('/get_owned_cards', (req, res) => {
    const { username, setId } = req.query;

    if (!username || !setId) {
        return res.status(400).send('Username and setId are required');
    }

    const query1 = "SELECT userId FROM user_info_cool WHERE username = ?";

    db.query(query1, [username], (err1, result1) => {
        if (err1) {
            return res.status(500).send(err1);
        }

        if (result1.length === 0) {
            return res.status(404).send('User not found');
        }

        const userId = result1[0].userId;

        const query2 = `
            SELECT cardId
            FROM user_cards
            WHERE userId = ? AND setId = ?
        `;

        db.query(query2, [userId, setId], (err2, result2) => {
            if (err2) {
                return res.status(500).send(err2);
            }
            res.send(result2)
        });
    });
});

app.post('/update_ownership', (req, res) => {
    const { username, cardId, setId, owned } = req.body;

    const getUserIdQuery = 'SELECT userId FROM user_info_cool WHERE username = ?';

    db.query(getUserIdQuery, [username], (err, result) => {
        if (err) {
            console.error('Error fetching userId:', err);
            return res.status(500).send('Error fetching user ID');
        }

        if (result.length === 0) {
            return res.status(404).send('User not found');
        }

        const userId = result[0].userId;  // Get the userId from the query result

        if (owned) {
            // Insert ownership record if it doesn't exist
            const insertQuery = 'INSERT INTO user_cards (userId, cardId, setId) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE userId=userId';
            db.query(insertQuery, [userId, cardId, setId], (err, result) => {
                if (err) {
                    console.error('Error inserting ownership:', err);
                    return res.status(500).send('Error updating ownership');
                }
                return res.status(200).send('Ownership updated successfully');
            });
        } else {
            // Remove the ownership record
            const deleteQuery = 'DELETE FROM user_cards WHERE userId = ? AND cardId = ? AND setId = ?';
            db.query(deleteQuery, [userId, cardId, setId], (err, result) => {
                if (err) {
                    console.error('Error removing ownership:', err);
                    return res.status(500).send('Error updating ownership');
                }
                return res.status(200).send('Ownership removed successfully');
            });
        }
    });
});



app.listen(PORT, () => {
    console.log("listening");
})