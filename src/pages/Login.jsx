import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css"; // Import the CSS

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <div className="auth-links">
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <br />
                    <Link to="/register">Don't have an account? Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
