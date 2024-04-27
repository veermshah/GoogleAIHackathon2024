const express = require('express');
const mongoose = require('mongoose');
const { type } = require('os');
const app  = express();
const uri = 'mongodb+srv://noelemmanuel20:GoogleAIHack@googleaihack.pmv7uas.mongodb.net/?retryWrites=true&w=majority&appName=GoogleAIHack';

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}

connect();


app.listen(8000, () => {    
    console.log('Server is running on port 8000');
});


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection = new collection('users', UserSchema);

module.exports = collection;