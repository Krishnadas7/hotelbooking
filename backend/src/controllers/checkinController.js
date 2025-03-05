exports.checkIn = async (req, res) => {
    const { bookingId, members } = req.body;
  
    try {
      const checkins = await prisma.checkin.createMany({
        data: members.map((m) => ({ bookingId, name: m.name, aadhaar: m.aadhaar })),
      });
      res.json({ message: "Check-in successful", checkins });
    } catch (err) {
      res.status(400).json({ error: "Check-in failed" });
    }
  };
  