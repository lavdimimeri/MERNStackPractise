var express = require('express');
var app = express();


app.get('/',function(request, response){
   response.send('My First API'); 
});

app.get('/funions',function(request, response){
   response.send('Give me some funcions foo'); 
});

app.listen(3000, function(){
    console.log("First app running on port 3000");
});