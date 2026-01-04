import { useState } from "react";
import "./MeetingForm.css";

const MeetingForm = ({ onAddMeeting }) => {
  const [formData, setFormData] = useState({
    meetingDate: "",
    meetingType: "",
    meetingDescription: "",
    document: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      document: e.target.files[0]
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const newMeeting = {
    MeetingDate: formData.meetingDate,
    MeetingTypeID: formData.meetingType,
    MeetingDescription: formData.meetingDescription,
    DocumentPath: formData.document ? formData.document.name : ""
  };

  onAddMeeting(newMeeting);

  setFormData({
    meetingDate: "",
    meetingType: "",
    meetingDescription: "",
    document: null
  });
};

  return (
    <div className="meeting-form">
      <h3>Add Meeting</h3>

      <form className="meeting-form-ui" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Meeting Date & Time</label>
          <input
            type="datetime-local"
            name="meetingDate"
            value={formData.meetingDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Meeting Type</label>
          <select
            name="meetingType"
            value={formData.meetingType}
            onChange={handleChange}
            required
          >
            <option value="">Select Meeting Type</option>
            <option value="Team Meeting">Team Meeting</option>
            <option value="Client Meeting">Client Meeting</option>
            <option value="Project Review">Project Review</option>
            <option value="Management Review">Management Review</option>
          </select>
        </div>

        <div className="form-group">
          <label>Meeting Description</label>
          <textarea
            name="meetingDescription"
            rows="3"
            value={formData.meetingDescription}
            onChange={handleChange}
            placeholder="Enter meeting agenda or description"
            required
          />
        </div>

        <div className="form-group">
          <label>Document (optional)</label>
          <input
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={() =>
              setFormData({
                meetingDate: "",
                meetingType: "",
                meetingDescription: "",
                document: null
              })
            }
          >
            Clear
          </button>

          <button type="submit" className="btn-primary">
            Add Meeting
          </button>
        </div>
      </form>
    </div>
  );
};

export default MeetingForm;
