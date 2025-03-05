/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

const Checkin = () => {
  const [bookingId, setBookingId] = useState("");
  const [members, setMembers] = useState([{ name: "", aadhaar: "" }]);

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const addMember = () => {
    setMembers([...members, { name: "", aadhaar: "" }]);
  };

  const checkIn = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/checkin",
        { bookingId, members },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Check-in successful!");
    } catch (error) {
      console.error("Check-in failed", error);
      alert("Check-in failed");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Booking ID"
        className="border p-2 m-2"
        onChange={(e) => setBookingId(e.target.value)}
      />
      {members.map((member, index) => (
        <div key={index} className="flex space-x-2">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 m-2"
            value={member.name}
            onChange={(e) => handleMemberChange(index, "name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Aadhaar Number"
            className="border p-2 m-2"
            value={member.aadhaar}
            onChange={(e) => handleMemberChange(index, "aadhaar", e.target.value)}
          />
        </div>
      ))}
      <button className="bg-gray-500 text-white p-2 m-2" onClick={addMember}>
        Add Member
      </button>
      <button className="bg-green-500 text-white p-2" onClick={checkIn}>
        Check-in
      </button>
    </div>
  );
};

export default Checkin;
