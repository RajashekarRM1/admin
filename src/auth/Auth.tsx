import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔐 TEMP AUTH LOGIC (replace later with API)
    localStorage.setItem("auth", "true");

    // redirect after login / register
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>{isLogin ? "Login" : "Create Account"}</h2>
        <p className="auth-subtitle">
          {isLogin
            ? "Login with your email or mobile"
            : "Register to get started"}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>

          {/* REGISTER ONLY */}
          {!isLogin && (
            <div className="row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
          )}

          {!isLogin && (
            <>
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Mobile Number" required />
            </>
          )}

          {/* LOGIN ONLY */}
          {isLogin && (
            <input
              type="text"
              placeholder="Email or Mobile Number"
              required
            />
          )}

          <input type="password" placeholder="Password" required />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
            />
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Auth;
