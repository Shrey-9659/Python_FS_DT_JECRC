import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/token/", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({username, password})
        })
            const data = await response.json()
            if(response.ok){
                localStorage.setItem("accessToken", data.access)
                alert("Login Successfull, token saved")
            }else{
                alert("Invalid credentials")
            }
        } catch (error) {
            console.error(`Error occured : ${error.message}`)
        }
    }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p>Please login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don't have an account?
            <a href="/"> Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;