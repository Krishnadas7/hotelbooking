import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Booking from "./components/Booking";
import Checkin from "./components/Checkin";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-6">Hotel Booking & Check-in</h1>
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/checkin" element={<Checkin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
