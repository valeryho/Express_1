const express=require('express');
const app = express();
const home_page= require ("./routes/home_page");
const path = require('path');

const fs = require('fs');



// let test=[];
// test[0]=ct1;
// test[1]=ct1;
// console.log(test);


app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","pug");
app.set('views','views');



app.use(home_page);
app.listen(3000);








