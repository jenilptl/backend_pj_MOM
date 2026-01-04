import { meetingMembers } from "../../data/dummyData";
import "./AttendanceSummary.css";

const AttendanceSummary = () => {
  const presentCount = meetingMembers.filter(m => m.IsPresent).length;
  const absentCount = meetingMembers.filter(m => !m.IsPresent).length;

  return (
    <div className="attendance-card">
      <h4>Attendance Summary</h4>
      <p>Present: {presentCount}</p>
      <p>Absent: {absentCount}</p>
    </div>
  );
};

export default AttendanceSummary;
