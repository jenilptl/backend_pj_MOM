import "./Attendance.css";

import AddMembers from "../components/Attendance/AddMembers";
import MarkAttendance from "../components/Attendance/MarkAttendance";
import AttendanceSummary from "../components/Attendance/AttendanceSummary";

const Attendance = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="attendance-page">
      <h3>Attendance & Participants</h3>

      {/* Admin / Convener only */}
      {role !== "Staff" && (
        <>
          <AddMembers />
          <MarkAttendance />
        </>
      )}

      {/* Everyone can see summary (staff sees own summary only) */}
      <AttendanceSummary />
    </div>
  );
};

export default Attendance;
