import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css"; // Import the CSS

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Registering with:", { name, email, password });
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                    <button type="submit">Sign Up</button>
                </form>
                <div className="auth-links">
                    <Link to="/login">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
