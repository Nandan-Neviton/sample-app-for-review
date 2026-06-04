import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (value) => {
    return /\S+@\S+\.\S+/.test(value);
  };

  const handleReset = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setMessage("Email is required");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setMessage("Please enter a valid email address");
      return;
    }

    // Simulated API call
    setTimeout(() => {
      setMessage(
        "If an account with that email exists, a reset link has been sent."
      );
    }, 1000);
  };
//tetst
//etasd/
//asdasd/
//asdasd
  return (
    <div style={{ padding: "20px" }}>
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleReset}>
        Send Reset Link
      </button>

      <p>{message}</p>
    </div>
  );
}