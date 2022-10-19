const express = require('express');

const {connection, studentModel} = require("./db");

const app = express();
app.use(express.json());

app.get('/', function(req, res){
    res.send("hello world!");
});


app.get('/students', async function(req, res){
    const results = await studentModel.find();
    res.send(results);
});

app.post('/students', async function(req, res){
    const data = req.body;
    const student = new studentModel(data)
    student.save();
    res.send(student);
});


app.listen(8080, async()=>{
    try{ 
        await connection;
        console.log("connected successfully");

     }catch(err){
        console.log(err);
        console.log("connection error");
     }

console.log("listening on port 8080");
})