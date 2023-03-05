import { useState } from "react";
import "../styles/Community.css";

function CommunityPage() {
  const auth = localStorage.getItem("authToken");
  if (!auth) window.location.href = "/login";
  return (
    <div className="Community">
      <nav className="sidebar">
        <div className="logo">
          <img src={"/logo1.png"} alt="." />
          <p>Mindmate</p>
        </div>
        <ul>
          <li>
            <a href="/">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/chat">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <span>Chat</span>
            </a>
          </li>
          <li>
            <a href="/community">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <span>Community</span>
            </a>
          </li>
          <li>
            <a href="/profile">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span>Profile</span>
            </a>
          </li>
        </ul>
        <div className="logout-btn">
          <button
            onClick={() => {
              localStorage.removeItem("authToken");
              window.location.href = "/login";
            }}
          >
            <img alt="." src="/logout1.png" />
            Logout
          </button>
        </div>
      </nav>
      <main>
        <header>
          <p>
            Join a <span>COMMUNITY</span> that suits your need
          </p>
        </header>

        <section className="mainContent">
          <article>
            <div className="text">
              <h2>I have been there</h2>
              <p>
                A community of people that have experienced and surmounted
                different mental challenges{" "}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href="/chat"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #5f1e7e",
                    padding: "5px",
                    color: "white",
                    background: "#5f1e7e",
                  }}
                >
                  Join Now
                </a>
                <a
                  href="/learn-more"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #5f1e7e",
                    padding: "5px",
                    color: "#5f1e7e",
                  }}
                >
                  Learn more
                </a>
              </div>
            </div>
            <img src="/community1.png" alt="." />
          </article>

          <article>
            <img src="/community2.png" alt="." />
            <div className="text">
              <h2>Let&apos;s talk about it</h2>
              <p>
                A community where you are free to talk about anything at anytime
                without fear{" "}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href="/chat"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #5f1e7e",
                    padding: "5px",
                    color: "white",
                    background: "#5f1e7e",
                  }}
                >
                  Join Now
                </a>
                <a
                  href="/learn-more"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #5f1e7e",
                    padding: "5px",
                    color: "#5f1e7e",
                  }}
                >
                  Learn more
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default CommunityPage;
