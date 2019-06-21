const express = require('express');
        const router = express.Router();
         router.get("/key", (req, res, next) => {
            res.render('key', {
            title: 'title',
            header: 'header',
            content: 'content',
            footer: 'footer'
        });
    });
    module.exports = router;