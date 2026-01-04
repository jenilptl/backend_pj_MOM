import "./Meetings.css";

import MeetingList from "../components/MeetingList/MeetingList";
import MeetingForm from "../components/MeetingForm/MeetingForm";
import EditMeeting from "../components/EditMeeting/EditMeeting";
import MeetingCalendar from "../components/MeetingCalendar/MeetingCalendar";
import { useState } from "react";

const Meetings = ({ meetings, setMeetings }) => {
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const addMeeting = (newMeeting) => {
    setMeetings([
      ...meetings,
      {
        ...newMeeting,
        MeetingID: meetings.length + 101,
        IsCancelled: false,
        Created: new Date().toISOString(),
        Modified: new Date().toISOString()
      }
    ]);
  };

  const updateMeeting = (updatedMeeting) => {
    setMeetings(
      meetings.map((m) =>
        m.MeetingID === updatedMeeting.MeetingID ? updatedMeeting : m
      )
    );
    setSelectedMeeting(null);
  };

  const cancelMeeting = (id) => {
    setMeetings(
      meetings.map((m) =>
        m.MeetingID === id
          ? {
              ...m,
              IsCancelled: true,
              CancellationDateTime: new Date().toISOString(),
              CancellationReason: "Cancelled by user"
            }
          : m
      )
    );
  };

  return (
    <div className="meetings-page">
      <h3>Meetings</h3>

      <div className="meetings-layout">

        <div className="meetings-left">
          <MeetingList
            meetings={meetings}
            onEdit={setSelectedMeeting}
            onCancel={cancelMeeting}
          />
        </div>

        <div className="meetings-right">
          <MeetingCalendar title="Meeting Calendar" />

          {selectedMeeting && (
            <EditMeeting
              meeting={selectedMeeting}
              onUpdate={updateMeeting}
              onClose={() => setSelectedMeeting(null)}
            />
          )}

          <MeetingForm onAddMeeting={addMeeting} />
        </div>
      </div>
    </div>
  );
};

export default Meetings;
