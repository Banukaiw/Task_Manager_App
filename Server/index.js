const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const UserModel = require('./models/User') 

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://banukaiw:banuka2001@authentication.2fjcpmn.mongodb.net/?retryWrites=true&w=majority&appName=authentication");

app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No User Exists")
        }
    })
})
app.post('/register', (req, res)=>{
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err => res.json(err))
})
app.listen(3001, ()=>{
    console.log("server is running")
})