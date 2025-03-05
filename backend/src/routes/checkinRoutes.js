const express = require("express");
const { checkIn } = require("../controllers/checkinController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", checkIn);

module.exports = router;
