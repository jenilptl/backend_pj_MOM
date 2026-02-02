import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Master from "./pages/Master";
import Meetings from "./pages/Meetings";
import Reports from "./pages/Reports";
import Attendance from "./pages/Attendance";
import NotFound from "./pages/NotFound";

import { meetings as initialMeetings } from "./data/dummyData";

const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

function App() {
  const [meetings, setMeetings] = useState(initialMeetings);
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  return (
    <div>
      {/* Header */}
      {!isLoginPage && <Header />}

      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? (
              <Dashboard meetings={meetings} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/meetings"
          element={
            isAuthenticated() ? (
              <Meetings
                meetings={meetings}
                setMeetings={setMeetings}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/attendance"
          element={
            isAuthenticated() ? <Attendance /> : <Navigate to="/" />
          }
        />

        <Route
          path="/profile"
          element={
            isAuthenticated() ? <Profile /> : <Navigate to="/" />
          }
        />

        <Route
          path="/master"
          element={
            isAuthenticated() ? <Master /> : <Navigate to="/" />
          }
        />

        <Route
          path="/reports"
          element={
            isAuthenticated() ? <Reports /> : <Navigate to="/" />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
