import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Master from "./pages/Master";
import Meetings from "./pages/Meetings";
import Reports from "./pages/Reports";
import Attendance from "./pages/Attendance";
import NotFound from "./pages/NotFound";

import { meetings as initialMeetings } from "./data/dummyData";

function App() {
  const [meetings, setMeetings] = useState(initialMeetings);

  return (
    <div>
      <Header />

      <Routes>   
        <Route
          path="/"
          element={<Dashboard meetings={meetings} />}
        />
        <Route
          path="/meetings"
          element={
            <Meetings
              meetings={meetings}
              setMeetings={setMeetings}
            />
          }
        />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/master" element={<Master />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
