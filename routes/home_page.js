const express=require('express');
const router=express.Router();
const fs=require('fs');


router.get("/",(req,res,next)=>{
    // fs.writeFile('rest.txt', 'rest', function (error, data) {});
    let ct = fs.readFileSync("rest.txt", "utf8");
    let ct1 = JSON.parse(ct);
    console.log("tet");
    console.log(ct1);
    console.log(ct1[0].title);

    res.render('index',{
                        title:ct1[0].title,
                        header:ct1[0].header,
                        content:ct1[0].content,
                        footer:ct1[0].footer });
    
});



module.exports=router;