const express = require('express');
const router = express.Router();
const fs = require('fs');

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});


router.get("/admin",(req,res,next)=>{
    res.render('admin');
    console.log("admin_load");
});


router.post('/admin', urlencodedParser, function (req, res) {
        console.log("data append");
        let ct;
        let ct1=[];

        let temp = {
            key: req.body.key,
            title: req.body.title,
            header:req.body.header,
            content:req.body.content,
            footer:req.body.footer
        };
         if (fs.existsSync("rest.txt")){
            ct = fs.readFileSync("rest.txt", "utf8");
            if (ct != "") {
                ct1 = JSON.parse(ct);
                ct1[ct1.length] = temp;
            }
            else
            {
                ct1[0]=temp;
            }
        }
        else
        {
            ct1[0] = temp;
        }
        
        let str = JSON.stringify(ct1);
        console.log(str);
        fs.writeFileSync("rest.txt", str);
        Createjs(temp);
        Createpeg(temp);

        res.redirect("/admin");
});

function Createjs(ct) {
    let str
    const path = require('path');
    console.log(__dirname);
  str= `const express = require('express');
        const router = express.Router();
         router.get("/${ct.key}", (req, res, next) => {
            res.render('${ct.key}', {
            title: '${ct.title}',
            header: '${ct.header}',
            content: '${ct.content}',
            footer: '${ct.footer}'
        });
    });
    module.exports = router;`
    let file_name=`${ct.key}.js`
    fs.writeFileSync(path.join(__dirname,file_name), str);
}


function Createpeg(ct) {
    let str
    const path = require('path');  
str =
` 
doctype html
html(lang = 'en')
    head
        meta(charset = 'utf-8')
        meta(name = "viewport" content = "width=device-width, initial-scale=1.0")
        meta(http - equiv = "X-UA-Compatible" content = "ie=edge")
        title #{title}
        link(rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
        link(rel = "stylesheet" href = "/css/main.css")
    body
        div.container
            div.row
                div(style = "display:block")
                    h1 #{header}
            div.row
                div #{content}
        div.container
            diw.row
              div #{footer}
`; 
    let file_name = `${ct.key}.pug`
    
    fs.writeFileSync(path.join(__dirname, "..", "views", file_name), str);
}
module.exports = router;