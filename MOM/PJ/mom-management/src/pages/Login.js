import "./Login.css";
import brandLogo from "../assets/mom-login-brand.svg";

const Login = () => {
  return (
    <div className="login-page">

      {/* TEMP BACK BUTTON
      <button
        className="back-dashboard-btn"
        onClick={() => (window.location.href = "/")}
      >
        ← Dashboard
      </button> */}

      <div className="login-container">
        <div className="login-brand">
          <img src={brandLogo} alt="MOM Brand" />
        </div>


        <div className="login-form-box">
          <h3>Sign in to MOM</h3>

          <button className="google-btn">
            Continue with Google
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@company.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <button type="submit" className="btn-primary full">
              Login
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account?
            <span> Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
