import { useState } from "react";
import { meetings, staff, meetingMembers } from "../../data/dummyData";
import "./AddMembers.css";

const AddMembers = () => {
  const role = localStorage.getItem("role");
  const staffId = Number(localStorage.getItem("staffId"));

  const [meetingId, setMeetingId] = useState("");
  const [selectedStaff, setSelectedStaff] = useState([]);

  // Meetings convener/admin is allowed to manage
  const allowedMeetingIds =
    role === "Admin"
      ? meetings.map((m) => m.MeetingID)
      : meetingMembers
          .filter((mm) => mm.StaffID === staffId)
          .map((mm) => mm.MeetingID);

  const visibleMeetings = meetings.filter((m) =>
    allowedMeetingIds.includes(m.MeetingID)
  );

  const toggleStaff = (id) => {
    setSelectedStaff(
      selectedStaff.includes(id)
        ? selectedStaff.filter((s) => s !== id)
        : [...selectedStaff, id]
    );
  };

  const handleSubmit = () => {
    if (!meetingId || selectedStaff.length === 0) return;

    // Demo-only: backend will handle actual insert later
    console.log("Add members:", {
      meetingId,
      staffIds: selectedStaff
    });

    setMeetingId("");
    setSelectedStaff([]);
  };

  return (
    <div className="attendance-card">
      <h4>Add Meeting Members</h4>

      <select
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
      >
        <option value="">Select Meeting</option>
        {visibleMeetings.map((m) => (
          <option key={m.MeetingID} value={m.MeetingID}>
            {m.MeetingDescription}
          </option>
        ))}
      </select>

      <ul className="staff-list">
        {staff.map((s) => (
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
