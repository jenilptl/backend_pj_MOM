import "./Reports.css";
import { meetings, meetingMembers } from "../data/dummyData";

const Reports = () => {
  const role = localStorage.getItem("role");
  const staffId = Number(localStorage.getItem("staffId"));

  // Meetings where logged-in user is participant
  const participantMeetingIds = meetingMembers
    .filter((mm) => mm.StaffID === staffId)
    .map((mm) => mm.MeetingID);

  const visibleMeetings =
    role === "Admin"
      ? meetings
      : meetings.filter((m) =>
          participantMeetingIds.includes(m.MeetingID)
        );

  const totalMeetings = visibleMeetings.length;

  const cancelledMeetings = visibleMeetings.filter(
    (m) => m.IsCancelled
  ).length;

  const completedMeetings = visibleMeetings.filter(
    (m) => new Date(m.MeetingDate) < new Date() && !m.IsCancelled
  ).length;

  const activeMeetings = totalMeetings - cancelledMeetings;

  return (
    <div className="reports-page">
      <h3>Reports & Analytics</h3>

      <div className="report-cards">
        {(role === "Admin" || role === "Convener") && (
          <div className="report-card">
            <h4>Total Meetings</h4>
            <p>{totalMeetings}</p>
          </div>
        )}

        {role !== "Staff" && (
          <div className="report-card">
            <h4>Active Meetings</h4>
            <p>{activeMeetings}</p>
          </div>
        )}

        <div className="report-card">
          <h4>Cancelled Meetings</h4>
          <p>{cancelledMeetings}</p>
        </div>

        {role === "Staff" && (
          <div className="report-card">
            <h4>Completed Meetings</h4>
            <p>{completedMeetings}</p>
          </div>
        )}
      </div>

      <section className="report-section">
        <h4>Meeting Summary Report</h4>
        <p>
          Summary based on meetings you are associated with, including
          completed and cancelled sessions.
        </p>
      </section>

      {role !== "Staff" && (
        <section className="report-section">
          <h4>Meeting Wise Report</h4>
          <p>
            Detailed meeting reports including attendance and participation
            details.
          </p>
        </section>
      )}

      {role === "Admin" && (
        <section className="report-section export-section">
          <h4>Export Reports</h4>
          <p>
            Export reports in Excel or PDF format for record keeping.
          </p>

          <div className="export-buttons">
            <button className="btn-secondary">Export Excel</button>
            <button className="btn-primary">Export PDF</button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Reports;
