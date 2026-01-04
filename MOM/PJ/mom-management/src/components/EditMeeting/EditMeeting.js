import { useState, useEffect } from "react";
import "./EditMeeting.css";
import { meetingTypes } from "../../data/dummyData";

const EditMeeting = ({ meeting, onUpdate, onClose }) => {

  const [formData, setFormData] = useState({
    MeetingDate: "",
    MeetingTypeID: "",
    MeetingDescription: ""
  });


  useEffect(() => {
    if (meeting) {
      setFormData({
        MeetingDate: meeting.MeetingDate,
        MeetingTypeID: meeting.MeetingTypeID,
        MeetingDescription: meeting.MeetingDescription
      });
    }
  }, [meeting]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate({
      ...meeting,
      ...formData,
      Modified: new Date().toISOString()
    });
  };

  return (
    <div className="edit-meeting">
      <h3>Edit Meeting</h3>

      <form className="edit-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Meeting Date & Time</label>
          <input
            type="datetime-local"
            name="MeetingDate"
            value={formData.MeetingDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Meeting Type</label>
          <select
            name="MeetingTypeID"
            value={formData.MeetingTypeID}
            onChange={handleChange}
          >
            <option value="">Select type</option>
            {meetingTypes.map((t) => (
              <option key={t.MeetingTypeID} value={t.MeetingTypeID}>
                {t.MeetingTypeName}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="MeetingDescription"
            rows="3"
            value={formData.MeetingDescription}
            onChange={handleChange}
          />
        </div>

        <div className="edit-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onClose}
          >
            Close
          </button>

          <button
            type="submit"
            className="btn-primary"
          >
            Update
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditMeeting;
