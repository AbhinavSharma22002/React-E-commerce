const express = require("express");
const router = express.Router();


//Create a user using : Post "/api/auth/". Doesn't require Auth
router.get("/", (req, res) => {
    res.send("theshdfasdfjasdkn");
});

module.exports = router;
