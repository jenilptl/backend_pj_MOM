import "./Reports.css";
import { meetings } from "../data/dummyData";

const Reports = () => {
  const totalMeetings = meetings.length;
  const cancelledMeetings = meetings.filter(m => m.IsCancelled).length;
  const activeMeetings = totalMeetings - cancelledMeetings;

  return (
    <div className="reports-page">
      <h3>Reports & Analytics</h3>

      {/* Top summary cards */}
      <div className="report-cards">
        <div className="report-card">
          <h4>Total Meetings</h4>
          <p>{totalMeetings}</p>
        </div>

        <div className="report-card">
          <h4>Active Meetings</h4>
          <p>{activeMeetings}</p>
        </div>

        <div className="report-card">
          <h4>Cancelled Meetings</h4>
          <p>{cancelledMeetings}</p>
        </div>
      </div>

      {/* Meeting Summary */}
      <section className="report-section">
        <h4>Meeting Summary Report</h4>
        <p>
          Provides an overview of all meetings including upcoming, completed,
          and cancelled sessions for quick analysis.
        </p>
      </section>

      {/* Meeting Wise */}
      <section className="report-section">
        <h4>Meeting Wise Report</h4>
        <p>
          Displays detailed information for a selected meeting such as
          participants, attendance, and decisions taken.
        </p>
      </section>

      {/* Export */}
      <section className="report-section export-section">
        <h4>Export Reports</h4>
        <p>You can export reports in Excel or PDF format for record keeping.</p>

        <div className="export-buttons">
          <button className="btn-secondary">Export Excel</button>
          <button className="btn-primary">Export PDF</button>
        </div>
      </section>
    </div>
  );
};

export default Reports;
