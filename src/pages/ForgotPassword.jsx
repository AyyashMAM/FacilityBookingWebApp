import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css"; // Import the CSS

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleForgotPassword = (e) => {
        e.preventDefault();
        console.log("Sending password reset email to:", email);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Forgot Password</h2>
                <form onSubmit={handleForgotPassword}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Reset Password</button>
                </form>
                <div className="auth-links">
                    <Link to="/login">Back to Login</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
