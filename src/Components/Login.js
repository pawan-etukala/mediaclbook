import React, { useState } from "react";
import "../css/Login.css"; // Ensure styles for the input and error messages
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const validateEmail = (value) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, email: "Email is required." }));
      setIsEmailValid(false);
      return false;
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format." }));
      setIsEmailValid(false);
      return false;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
      setIsEmailValid(true);
      return true;
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, password: "Password is required." }));
      setIsPasswordValid(false);
      return false;
    } else if (value.length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters long.",
      }));
      setIsPasswordValid(false);
      return false;
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
      setIsPasswordValid(true);
      return true;
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    if (emailValid && passwordValid) {
      try {
        const response = await axios.post("https://your-api-endpoint/login", {
          email,
          password,
          userType,
        });

        if (response.status === 200) {
          // Redirect to AfterLogin
          navigate("/AfterLogin");
        } else {
          setErrors((prev) => ({
            ...prev,
            form: response.data.message || "Login failed",
          }));
        }
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          form:
            error.response?.data?.message ||
            "An error occurred. Please try again.",
        }));
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="text-center fw-bold shadow">WELCOME BACK..!</h1>

          <div className="mb3">
            <label htmlFor="userType" className="form-label">
              Select User Type:
            </label>
            <select
              className="form-control mb-3"
              id="userType"
              value={userType}
              onChange={handleUserTypeChange}
              required
            >
              <option value="" disabled>
                Select User Type
              </option>
              <option value="BHMSStudent">BHMS Student</option>
              <option value="HomeopathicDoctor">Homeopathic Doctor</option>
              <option value="Practitioner with Non-Indian/International Degrees">
                Practitioner with Non-Indian/International Degrees
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label shadow">
              Email address
            </label>
            <div className="input-group">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
              />
              {isEmailValid && (
                <span className="input-group-text text-success">✔</span>
              )}
            </div>
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label shadow">
              Password
            </label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                aria-describedby="passwordHelpBlock"
                value={password}
                onChange={handlePasswordChange}
              />
              {isPasswordValid && (
                <span className="input-group-text text-success">✔</span>
              )}
            </div>
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            <div id="passwordHelpBlock" className="clr d-none d-sm-block">
              Your password must be 8-20 characters long.
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row mt-5 justify-content-between">
            <button type="submit" className="btn btn-warning">
              Sign in
            </button>
            <a href="#" className="shadow text-dark">
              Forget Password
            </a>
          </div>
          {errors.form && (
            <div className="alert alert-danger mt-3">{errors.form}</div>
          )}
        </form>
      </div>
    </div>
  );
}
