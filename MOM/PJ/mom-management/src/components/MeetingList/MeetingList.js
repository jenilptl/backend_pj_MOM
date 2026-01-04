import "./MeetingList.css";
import { meetingTypes } from "../../data/dummyData";

const MeetingList = ({ meetings, onEdit, onCancel }) => {
  const getMeetingTypeName = (id) => {
    const type = meetingTypes.find((t) => t.MeetingTypeID == id);
    return type ? type.MeetingTypeName : "Unknown";
  };

  return (
    <div className="meeting-list">
      <h3>Meeting List</h3>

      <div className="meeting-list-container">
        {meetings.map((m) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingList;
