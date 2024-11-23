import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showSignUp, setShowSignUp] = React.useState(false);
  const navigate = useNavigate();
  const [formData, setFormdata] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const { login } = useAuth();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    fetch(
      `http://localhost:4000/users?username=${formData.username}&password=${formData.password}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          login(data[0]);
          alert("Login Successfull");
          navigate("/");
        } else {
          alert("Invalid username or password");
        }
      })
      .catch((error) => console.error("Error logging in", error));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (formData.password == !formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Signup successfull please login");
      })
      .catch((error) => console.error("Error signing up", error));
  };
  const toggleForm = (e) => {
    e.preventDefault();
    setShowSignUp(!showSignUp);
  };
  return (
    <>
      <main className="login-page">
        <div
          className="login-form-container"
          style={{ display: showSignUp ? "none" : "flex" }}
        >
          <h1 className="heading-big">Login</h1>
          <form className="user-forms" onSubmit={handleLoginSubmit}>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              autoComplete="off"
              onChange={handleChange}
              value={formData.username}
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              autoComplete="off"
              onChange={handleChange}
              value={formData.password}
            />
            <button type="submit" className="category-buttons">
              Login
            </button>
          </form>
          <p>
            Don't have an account ?
            <a href="#" onClick={toggleForm}>
              Signup
            </a>
          </p>
        </div>
        <div
          className="signup-form-container"
          style={{ display: showSignUp ? "flex" : "none" }}
        >
          <h1 className="heading-big">Sign up</h1>
          <form className="user-forms" onSubmit={handleSignUpSubmit}>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="off"
            />
            <button type="submit" className="category-buttons">
              Signup
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <a href="#" onClick={toggleForm}>
              Login
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;
