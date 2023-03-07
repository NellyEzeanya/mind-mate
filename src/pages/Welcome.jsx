import { useState } from "react";
import "../styles/Welcome.css";

function WelcomePage() {
  return (
    <div className="Welcome">
      <div className="top">
        <div className="logo">
          <img src={"/logo1.png"} alt="." />
          <h2>MindMate</h2>
        </div>
        <p>Welcome to your happy place</p>
      </div>

      <main className="text">
        <a href="/login" className="btn">
          Log In
        </a>
        <p>
          Don&apos;t have an account?{" "}
          <a href="/register" className="underline">
            SIGN UP
          </a>
        </p>
      </main>
    </div>
  );
}

export default WelcomePage;
