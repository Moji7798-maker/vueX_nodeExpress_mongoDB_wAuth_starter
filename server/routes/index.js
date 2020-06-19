const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/middleware/checkAuth");

router.get("/", (req, res) => {
    res.json({ url: "/" });
});

router.get("/api/user-data", authenticateToken, (req, res) => {
    const testData = [
        {
            id: 1,
            title: "Title 1",
        },
        {
            id: 2,
            title: "Title 2",
        },
    ];
    res.json(testData);
});

module.exports = router;
