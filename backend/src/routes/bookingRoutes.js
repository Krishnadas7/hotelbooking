const express = require("express");
const { bookHotel } = require("../controllers/bookingController");

const router = express.Router();

router.post("/book", bookHotel);

module.exports = router;
