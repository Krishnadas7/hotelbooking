const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.bookHotel = async (req, res) => {
  const { hotelName, userId, checkInDate, checkOutDate } = req.body;

  try {
    // ✅ Ensure the user exists before booking
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // ✅ Proceed with booking
    const booking = await prisma.booking.create({
      data: {
        userId,
        hotelName,
        checkInDate: new Date(checkInDate),
        checkOutDate: new Date(checkOutDate),
      },
    });

    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ error: "Booking failed" });
  }

  

};
