require('dotenv').config();
const path = require('path');
const admin=require('firebase-admin'); //For firebase

const express = require('express');
const app = express();

//code for parsing starts here ==========
const bodyParser  = require('body-parser');
const cors = require("cors");
const multer = require('multer')

// Middlewares for fireadd2
app.use(cors({ origin: 'http://localhost:8000', }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(multer().array()); 
//code for parsing ends here =============

const { router: measurementsRouter } = require('./api/routes/measurements.routes');

app.use(express.static(path.resolve(__dirname, 'dist')));

const { connectToDatabase } = require('./database');

// ============= Code for firebase STARTS here ===============================
var serviceAccount = require('./admin.json'); //don't forget to always have the admin.json key file in the correct place
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://fir-37e91-default-rtdb.europe-west1.firebasedatabase.app",
authDomain: "fir-37e91.firebaseapp.com",
});
var db=admin.database();
//var userRef=db.ref("users"); //that was from the example
var dataRef=db.ref("fcadataTest"); //we are using that
var receiveddata; //here is the data stored when received.
// ============= Code for firebase ENDS here ===============================

app.get("/", (_, res) => {
    res.sendFile("index.html");
});

//for receiving data from firebase
app.get("/fireget", (_, res) => {
  getData();
  res.send(receiveddata);
});

//for sending the data to the firebase. We will not use that.
app.post('/fireadd', function (req, res) {  
  // Prepare output in JSON format  
  //response = {  
  //    username:req.body.username,  
  //};
  let response = 200;
  console.log(JSON.stringify(req.body[0])); 
  //res.send(response); 
  res.sendStatus(response)
});

//This will be used because it works.
app.post('/fireadd2',(req, res) => {
  console.log("fireadd2 runs");
  let receiveddata2 = receiveddata;
  //if(receiveddata2.nonarray == null){
  //  receiveddata2.nonarray = [];
  //}
  //receiveddata.nonarray[1] = "test";
  //receiveddata.nonarray.push(JSON.stringify(req.body[0]));
  //receiveddata2.nonarray.push("test");
  //console.log("reveiveddata2.nonarray: " + receiveddata2.nonarray)
  //console.log("receiveddata2: " + receiveddata2);
  //addData(JSON.parse(receiveddata));
  //let testObject = JSON.stringify({testobject:"yolo"})

  //Today's date for testing purposes
  var today = new Date();
  //var dd = String(today.getDate()).padStart(2, '0');
  //var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //var yyyy = today.getFullYear();
  //today = mm + '/' + dd + '/' + yyyy;
  console.log(today);
  let testObject = JSON.parse('{"info":"Today is:' + today + '", "roll":"data"}')
  //let user = JSON.parse('{"name":"Tester36", "email":"yolo@yolo", "roll":"data"}') //this serves as an example
  console.log("testobject: " + JSON.stringify(testObject))
  addData(testObject);
  console.log("req.body: " + req.body);
  res.sendStatus(200)
      //.json({status:"Success", data:{body: req.body })
}); 



app.use(measurementsRouter);
getData();

connectToDatabase()
    .then(() => {
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log('Listening to port ' + PORT);
        });
    })
    .catch((error) => console.error(error));


//============ FIREBASE FUNCTIONS ======================================

//Sending data! Adding a json object to the database
function addData(obj){
    var oneData=dataRef.child(obj.roll);
    //var oneData=dataRef.child(obj.sdata);
    oneData.update(obj,(err)=>{
    if(err){
      console.log("Something went wrong" + err)
    //res2.status(300).json({"msg":"Something went wrong","error":err});
    }
    else{
    //res2.status(200).json({"msg":"user created sucessfully"});
    console.log("Data was sucessfully sent")
    }
    }) }
  
  
  //Fetching data! fetching a json object from the database
  function getData(){
    dataRef.once('value',function(snap) {
      snap.val();
      receiveddata = {"fcadataTest":snap.val()};
      console.log("receiveddata and stringify: " + JSON.stringify(receiveddata));
      })
  }