import "./Profile.css";

const Profile = () => {
  const user = {
    name: "JENIL PATEL",
    role: "Meeting Organizer",
    email: "vegadjenil2006@gmail.com",
    phone: "+91 94088 25620",
    department: "Computer Science",
    designation: "Project Lead",
    employeeId: "EMP-1023",
    joinedOn: "15 Aug 2023",
    bio: "Passionate about organizing productive meetings and keeping teams aligned.",
    permissions: ["Create Meetings", "Edit Meetings", "View Reports"]
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

          <p className="profile-bio">{user.bio || "No bio provided."}</p>

          <div className="profile-actions">
            <button className="btn-primary">Edit Profile</button>
            <button className="btn-secondary">Change Password</button>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h5>Basic Information</h5>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone || "Not provided"}</p>
            <p><strong>Employee ID:</strong> {user.employeeId}</p>
          </div>

          <div className="detail-section">
            <h5>Work Details</h5>
            <p><strong>Department:</strong> {user.department || "—"}</p>
            <p><strong>Designation:</strong> {user.designation || "—"}</p>
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
