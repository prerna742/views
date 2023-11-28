// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/register', (req, res) => {
//     res.render('register');
// });

// app.post('/register', (req, res) => {

//     const { name, email } = req.body;


//     console.log(`Name: ${name}, Email: ${email}`);
//     res.send('Thank you for register !');
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });











//  =>  ---- this is called independent function,jhn shuru hua h whi finish b ho gya h
// app(a,b)=>{}
// render means kisi ko point krna
// const name = req.body.name
// const email = req.body.email








// THIS CODE IS USED FOR CONNECTING THE DATABSE WE USE MONGO DB

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://0.0.0.0:27017/prerna").then(()=>{
//     console.log("connected");
// }).catch(()=>{
//     console.log("not connected try again");
// })

















const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017'; 
const dbName = 'mydatabase';

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const uri = 'mongodb://localhost:27017/formsubmit';
const client = new MongoClient(uri);  

client.connect(err => {
    if (err) {
        console.error('Failed to connect to the database');
    } else {
        console.log('Connected to the database');
    }
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const { name, email } = req.body;})

    const collection = client.db().collection('users');
    collection.insertOne({ name, email }, (err) => {
        if (err) {
            console.error('Error inserting data into MongoDB', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(`Name: ${name}, Email: ${email} saved to MongoDB`);
            res.send('Thank you for submitting the form. Your data has been registered successfully!');
        }
    });
app.post('/register', async (req, res) => {
    const { name, email, mobile } = req.body;


    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to the database');


        const db = client.db(dbName);


        const usersCollection = db.collection('users');
        await usersCollection.insertOne({ name, email, mobile });

        console.log(`Name: ${name}, Email: ${email}, Mobile: ${mobile}`);
        res.send('Thank you for registering!');
    } finally {

        await client.close();
        console.log('Connection closed');
    }
});

app.listen(port, '0.0.0.0', () => {
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});})
