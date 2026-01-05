import "./Dashboard.css";
import MeetingCalendar from "../components/MeetingCalendar/MeetingCalendar";

const Dashboard = ({ meetings }) => {
  const upcoming = meetings.filter(
    (m) => !m.IsCancelled && new Date(m.MeetingDate) >= new Date()
  ).length;

  const cancelled = meetings.filter(
    (m) => m.IsCancelled
  ).length;

  const completed = meetings.filter(
    (m) => !m.IsCancelled && new Date(m.MeetingDate) < new Date()
  ).length;

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>

      <div className="dashboard-layout">
        <div className="dashboard-main">
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h4>Upcoming Meetings</h4>
              <p>{upcoming}</p>
            </div>

            <div className="dashboard-card">
              <h4>Completed Meetings</h4>
              <p>{completed}</p>
            </div>

            <div className="dashboard-card">
              <h4>Cancelled Meetings</h4>
              <p>{cancelled}</p>
            </div>
          </div>
        </div>
        <MeetingCalendar title="Upcoming Meetings" />
      </div>
    </div>
  );
};

export default Dashboard;
