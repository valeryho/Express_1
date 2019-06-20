const express=require('express');
const app = express();

const path = require('path');

const fs = require('fs');



// let test=[];
// test[0]=ct1;
// test[1]=ct1;
// console.log(test);


app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","pug");
app.set('views','views');


const home_page = require("./routes/home_page");
app.use(home_page);

const admin = require("./routes/admin");
app.use(admin);



app.listen(3000);








