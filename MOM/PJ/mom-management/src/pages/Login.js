import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import brandLogo from "../assets/mom-login-brand.svg";
import { staff } from "../data/dummyData";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("Staff");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = staff.find(
      (s) =>
        s.Username === username &&
        s.Password === password &&
        s.Role === role
    );

    if (!user) {
      setError("Invalid credentials or role mismatch");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", user.Role);
    localStorage.setItem("staffId", user.StaffID);
    localStorage.setItem("staffName", user.StaffName);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-brand">
          <img src={brandLogo} alt="MOM Brand" />
        </div>

        <div className="login-form-box">
          <h3>Sign in to MOM</h3>

          <form className="login-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Login As</label>
              <div className="role-options">
                {["Admin", "Convener", "Staff"].map((r) => (
                  <label key={r}>
                    <input
                      type="radio"
                      value={r}
                      checked={role === r}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    {r}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="login-error">{error}</p>}

            <button className="btn-primary full">
              Login
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
