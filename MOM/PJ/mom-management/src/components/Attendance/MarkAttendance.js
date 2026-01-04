import { meetingMembers, staff } from "../../data/dummyData";
import "./MarkAttendance.css";

const MarkAttendance = () => {

  const getStaffName = (id) => {
    const member = staff.find(s => s.StaffID === id);
    return member ? member.StaffName : "Unknown";
  };

  return (
    <div className="attendance-card">
      <h4>Mark Attendance</h4>

      <table>
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {meetingMembers.map(m => (
            <tr key={m.MeetingMemberID}>
              <td>{getStaffName(m.StaffID)}</td>
              <td>
                <input type="checkbox" defaultChecked={m.IsPresent} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarkAttendance;
