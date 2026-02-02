import { useNavigate } from "react-router-dom";
import { staff } from "../data/dummyData";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const staffId = Number(localStorage.getItem("staffId"));

  const staffUser = staff.find((s) => s.StaffID === staffId);

  const user = staffUser
    ? {
        name: staffUser.StaffName,
        role: role,
        email: staffUser.EmailAddress,
        phone: staffUser.MobileNo,
        department: staffUser.Remarks || "—",
        designation: staffUser.Remarks || "—",
        employeeId: `EMP-${staffUser.StaffID}`,
        joinedOn: staffUser.Created,
        bio:
          role === "Staff"
            ? "Active participant in meetings and team discussions."
            : "Responsible for managing and organizing meetings.",
        permissions:
          role === "Staff"
            ? ["View Meetings", "View Attendance"]
            : ["Create Meetings", "Edit Meetings", "View Reports"]
      }
    : {
        name: "System User",
        role: role,
        email: "—",
        phone: "—",
        department: "—",
        designation: "—",
        employeeId: "—",
        joinedOn: "—",
        bio: "Profile data not available.",
        permissions: []
      };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="profile-page">
      <h3>My Profile</h3>

      <div className="profile-layout">
        <div className="profile-card">
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>

          <h4>{user.name}</h4>
          <span className="profile-role">{user.role}</span>

          <p className="profile-bio">
            {user.bio || "No bio provided."}
          </p>

          <div className="profile-actions">
            <button className="btn-primary">Edit Profile</button>
            <button className="btn-secondary">Change Password</button>
            <button
              className="btn-secondary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h5>Basic Information</h5>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Employee ID:</strong> {user.employeeId}</p>
          </div>

          <div className="detail-section">
            <h5>Work Details</h5>
            <p><strong>Department:</strong> {user.department}</p>
            <p><strong>Designation:</strong> {user.designation}</p>
            <p><strong>Joined On:</strong> {user.joinedOn}</p>
          </div>

          <div className="detail-section">
            <h5>Permissions</h5>
            <ul className="permission-list">
              {user.permissions.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
