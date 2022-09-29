var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients=[
    {
        "id":"233kak",
        "text":"eggs"
    },
    {
        "id":"dkefkc",
        text:"Milk"
        
    }
];

app.get('/',function(request, response){
   response.send(ingredients); 
});


app.post('/',function(request, response){
   var ingredient=request.body;
    if(!ingredient || ingredient.text === ""){
        response.status(500).send({error: "Your ingredient must have text"});
        }else {
            ingredients.push(ingredient);
            response.status(200).send(ingredients);
        }

});



app.listen(3000, function(){
    console.log("First app running on port 3000");
});