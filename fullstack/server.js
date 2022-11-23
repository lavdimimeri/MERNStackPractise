require('dotenv').config();

const express = require('express');
const app = express();


require('./database');

app.get("*", (_, res) => {
    res.send("ok");

})


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});