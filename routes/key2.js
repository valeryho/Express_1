const express = require('express');
        const router = express.Router();
         router.get("/key2", (req, res, next) => {
            res.render('key2', {
            title: 'title2',
            header: 'header2',
            content: 'content2',
            footer: 'footer2'
        });
    });
    module.exports = router;