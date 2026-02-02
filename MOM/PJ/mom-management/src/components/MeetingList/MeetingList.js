import "./MeetingList.css";
import { meetingTypes, meetingMembers } from "../../data/dummyData";

const MeetingList = ({ meetings, onEdit, onCancel }) => {
  const role = localStorage.getItem("role");
  const staffId = Number(localStorage.getItem("staffId"));

  const getMeetingTypeName = (id) => {
    const type = meetingTypes.find((t) => t.MeetingTypeID == id);
    return type ? type.MeetingTypeName : "Unknown";
  };

  // Meetings where logged-in user is a member
  const memberMeetingIds = meetingMembers
    .filter((mm) => mm.StaffID === staffId)
    .map((mm) => mm.MeetingID);

  // Visible meetings based on role
  const visibleMeetings = meetings.filter((m) => {
    if (role === "Admin") return true;

    if (role === "Convener" || role === "Staff") {
      return memberMeetingIds.includes(m.MeetingID);
    }

    return false;
  });

  return (
    <div className="meeting-list">
      <h3>Meeting List</h3>

      <div className="meeting-list-container">
        {visibleMeetings.length === 0 && (
          <p>No meetings available for you.</p>
        )}

        {visibleMeetings.map((m) => (
          <div
            key={m.MeetingID}
            className={`meeting-item ${m.IsCancelled ? "cancelled" : ""}`}
          >
            <div className="meeting-info">
              <h4>{getMeetingTypeName(m.MeetingTypeID)}</h4>
              <p className="meeting-desc">{m.MeetingDescription}</p>
              <p className="meeting-date">{m.MeetingDate}</p>

              <span
                className={`meeting-status ${
                  m.IsCancelled ? "status-cancelled" : "status-active"
                }`}
              >
                {m.IsCancelled ? "Cancelled" : "Scheduled"}
              </span>
            </div>

            {/* ACTIONS */}
            {(role === "Admin" || role === "Convener") && (
              <div className="meeting-actions">
                <button
                  className="btn-edit"
                  onClick={() => onEdit(m)}
                >
                  Edit
                </button>

                {!m.IsCancelled && (
                  <button
                    className="btn-cancel"
                    onClick={() => onCancel(m.MeetingID)}
                  >
                    Cancel
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingList;
