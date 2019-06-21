const express = require('express');
        const router = express.Router();
         router.get("/key3", (req, res, next) => {
            res.render('key3', {
            title: 'title3',
            header: 'header3',
            content: 'content3',
            footer: 'footer3'
        });
    });
    module.exports = router;