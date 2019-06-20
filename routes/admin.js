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
        let ct = fs.readFileSync("rest.txt", "utf8");
        let ct1 = JSON.parse(ct);
        let temp = {
            key: req.body.key,
            title: req.body.title,
            header:req.body.header,
            content:req.body.content,
            footer:req.body.footer
        }
        ct1[ct1.length]=temp;
        console.log(ct1);
        console.log(ct1[0]);
        let str = JSON.stringify(ct1);
        console.log(str);
        fs.writeFileSync("rest.txt", str);
        Createjs(temp);
        
        res.redirect("/admin");
});

function Createjs(ct) {
    let str
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
    fs.writeFileSync(file_name, str);
    
}

module.exports = router;