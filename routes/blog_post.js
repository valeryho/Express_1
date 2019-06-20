const express = require('express');
const router = express.Router();
const path = require("path");

router.get("/blog_post.html", (req, res, next) => {
    console.log(req);
    res.sendFile(path.join(__dirname, "../", "views", "blog_post.html"));
});
module.exports = router;