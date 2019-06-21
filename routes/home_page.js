const express=require('express');
const router=express.Router();
const fs=require('fs');


router.get("/",(req,res,next)=>{
    let str;
    if (fs.existsSync("rest.txt")) {
        let ct = fs.readFileSync("rest.txt", "utf8");
        if (ct!="")
        {
            let t=[];
            let ct1=JSON.parse(ct);
            for (let i = 0; i < ct1.length; i++) {
               t[i]=ct1[i].key;
                
            }
            res.render('index', {t});
             console.log (t);

           

        }
        else 
        {
             res.render('index');
            
        }
    }
    else
    res.render('index');
    
     

    

    // res.render('index',{
    //                     title:ct1[0].title,
    //                     header:ct1[0].header,
    //                     content:ct1[0].content,
    //                     footer:ct1[0].footer });
    
});



module.exports=router;