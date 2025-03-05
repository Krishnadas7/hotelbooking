import { useState } from "react";
import axios from "axios";

const Booking = () => {
  const [hotelName, setHotelName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const bookHotel = async () => {
    try {
      const token = localStorage.getItem("token");
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        "http://localhost:5000/api/bookings/book",
        { hotelName, checkInDate, checkOutDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Hotel booked successfully!");
    } catch (error) {
      console.error("Booking failed", error);
      alert("Booking failed");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Hotel Name"
        className="border p-2 m-2"
        onChange={(e) => setHotelName(e.target.value)}
      />
      <input
        type="date"
        className="border p-2 m-2"
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <input
        type="date"
        className="border p-2 m-2"
        onChange={(e) => setCheckOutDate(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2" onClick={bookHotel}>
        Book Hotel
      </button>
    </div>
  );
};

export default Booking;
