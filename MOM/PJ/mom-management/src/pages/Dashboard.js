import "./Dashboard.css";
import MeetingCalendar from "../components/MeetingCalendar/MeetingCalendar";

const Dashboard = ({ meetings }) => {
  const upcoming = meetings.filter(
    (m) => !m.IsCancelled && new Date(m.MeetingDate) >= new Date()
  ).length;

  const cancelled = meetings.filter((m) => m.IsCancelled).length;

  const completed = meetings.filter(
    (m) => !m.IsCancelled && new Date(m.MeetingDate) < new Date()
  ).length;

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>

      {/* STATS + CALENDAR */}
      <div className="dashboard-layout">
        <div className="dashboard-main">
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h4>Upcoming Meetings</h4>
              <p>{upcoming}</p>
              <span className="card-desc">
                Scheduled sessions awaiting execution
              </span>
            </div>

            <div className="dashboard-card">
              <h4>Completed Meetings</h4>
              <p>{completed}</p>
              <span className="card-desc">
                Successfully concluded meetings
              </span>
            </div>

            <div className="dashboard-card">
              <h4>Cancelled Meetings</h4>
              <p>{cancelled}</p>
              <span className="card-desc">
                Sessions cancelled or postponed
              </span>
            </div>
          </div>
        </div>

        <MeetingCalendar title="Upcoming Meetings" />
      </div>

      {/* ABOUT MOM */}
      <section className="dashboard-section">
        <h4>About MOM Management System</h4>
        <p>
          MOM (Minutes of Meeting) Management System is a professional platform
          designed to streamline meeting planning, attendance tracking, and
          decision documentation across organizations.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <h5>10+ Years of Service</h5>
            <p>
              Trusted by organizations for structured meeting management and
              decision tracking.
            </p>
          </div>

          <div className="info-card">
            <h5>Multi-Sector Usage</h5>
            <p>
              Used across IT, Education, Healthcare, Corporate, and Government
              sectors.
            </p>
          </div>

          <div className="info-card">
            <h5>Operational Excellence</h5>
            <p>
              Improves accountability, follow-ups, and meeting productivity.
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS SCROLLER */}
      <section className="dashboard-section">
        <h4>Recent Events & Workshops</h4>

        <div className="event-scroller">
          <div className="event-card">Annual Strategy Meet 2025</div>
          <div className="event-card">Leadership Alignment Workshop</div>
          <div className="event-card">Agile Sprint Review Summit</div>
          <div className="event-card">Corporate Governance Meetup</div>
          <div className="event-card">Digital Transformation Forum</div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="dashboard-section">
        <h4>How to Use MOM</h4>

        <div className="howto-grid">
          <div className="howto-card">
            <h5>Create Meetings</h5>
            <p>
              Schedule meetings, define agenda, and assign participants with
              ease.
            </p>
          </div>

          <div className="howto-card">
            <h5>Track Attendance</h5>
            <p>
              Mark attendance, monitor participation, and generate summaries.
            </p>
          </div>

          <div className="howto-card">
            <h5>Analyze Reports</h5>
            <p>
              View analytics on completed, cancelled, and upcoming meetings.
            </p>
          </div>
        </div>

        <div className="video-guide">
          <p>Watch a quick guide on using MOM effectively:</p>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Watch Tutorial
          </a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
