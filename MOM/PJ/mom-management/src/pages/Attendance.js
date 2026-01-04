import "./Attendance.css";

import AddMembers from "../components/Attendance/AddMembers";
import MarkAttendance from "../components/Attendance/MarkAttendance";
import AttendanceSummary from "../components/Attendance/AttendanceSummary";

const Attendance = () => {
  return (
    <div className="attendance-page">
      <h3>Attendance & Participants</h3>

      <AddMembers />
      <MarkAttendance />
      <AttendanceSummary />
    </div>
  );
};

export default Attendance;
