const express = require('express');
        const router = express.Router();
        const fs = require('fs');
    router.get("/some.js", (req, res, next) => {
            res.render('some.js', {
            title: 1,
            header: 1,
            content: 1,
            footer: 1
        });

    });
    module.exports = router;