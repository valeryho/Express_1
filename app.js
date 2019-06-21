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


let rd=[];
 if (fs.existsSync("rest.txt")){
    let ct = fs.readFileSync("rest.txt", "utf8");
    if (ct != "")
    {
    let ct1 = JSON.parse(ct);
    for (let i = 0; i < ct1.length; i++) {
        console.log(ct1[i].key);
        rd[i] = require(`./routes/${ct1[i].key}`);
        app.use(rd[i]);
        
        }
    }
}





app.listen(3000);








