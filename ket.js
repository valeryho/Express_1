const express = require('express');
        const router = express.Router();
        const fs = require('fs');
    router.get("/ket", (req, res, next) => {
            res.render('ket', {
            title: 'ter',
            header: 'ter',
            content: 'ter',
            footer: 'ter'
        });

    });
    module.exports = router;