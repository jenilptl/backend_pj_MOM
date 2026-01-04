import { useState } from "react";
import { meetings, staff } from "../../data/dummyData";
import "./AddMembers.css";

const AddMembers = () => {
  const [meetingId, setMeetingId] = useState("");
  const [selectedStaff, setSelectedStaff] = useState([]);

  const toggleStaff = (id) => {
    setSelectedStaff(
      selectedStaff.includes(id)
        ? selectedStaff.filter(s => s !== id)
        : [...selectedStaff, id]
    );
  };

  const handleSubmit = () => {
    if (!meetingId || selectedStaff.length === 0) return;
    setMeetingId("");
    setSelectedStaff([]);
  };

  return (
    <div className="attendance-card">
      <h4>Add Meeting Members</h4>

      <select value={meetingId} onChange={(e) => setMeetingId(e.target.value)}>
        <option value="">Select Meeting</option>
        {meetings.map(m => (
          <option key={m.MeetingID} value={m.MeetingID}>
            {m.MeetingDescription}
          </option>
        ))}
      </select>

      <ul className="staff-list">
        {staff.map(s => (
          <li key={s.StaffID}>
            <label>
              <input
                type="checkbox"
                checked={selectedStaff.includes(s.StaffID)}
                onChange={() => toggleStaff(s.StaffID)}
              />
              <span>{s.StaffName}</span>
            </label>
          </li>
        ))}
      </ul>

      <button onClick={handleSubmit}>Add Members</button>
    </div>
  );
};

export default AddMembers;
