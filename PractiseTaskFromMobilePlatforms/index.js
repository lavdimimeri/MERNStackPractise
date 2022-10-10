const express=require('express');
const app=express();

const mysql=require('mysql');

var connection=mysql.createConnection({
    host: 'localhost',
    database: 'temperature',
    user: 'root',
    password: 'password'
});

connection.connect(function(error){
    if(error){
        throw error;
    }else
    {
        console.log('MySQL DATABASE is connected Succesfully');
    }
});

app.use((req,res,next)=>{
 console.log(new Date());

 next();
});

app.use(express.static(__dirname + "/public"));

//Serving html-file
app.get("/",(req,res)=>{
res.sendFile(index.html);
});

//handling api-request
app.get("/api",(req,res)=>{
//... Fetch data from database and send it to client
res.send({
    breed: "pug",
    cute:true,
    age:2,
   });


   
});




app.listen(3000,()=>{
console.log("server running on port: " + 3000);

});