import { useState } from "react";
import "../styles/App.css";

function App() {
  const auth = localStorage.getItem("authToken");
  if (!auth) window.location.href = "/login";
  return (
    <div className="App">
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
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <span>Chat</span>
            </a>
          </li>
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
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <span>Community</span>
            </a>
          </li>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px",
              border: "1px solid rgba(219, 209, 209, 0.75)",
              maxWidth: "350px",
              borderRadius: "3px",
              width: "100%",
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ width: "20px" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
            <input
              type="text"
              name="search"
              style={{ border: "none", outline: "none", flexGrow: 1 }}
              id="search"
              placeholder="Search"
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="https://avatars.dicebear.com/api/initials/John%20Doe.svg"
              alt=".."
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ width: "28px" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              ></path>
            </svg>
          </div>
        </header>

        <section className="mainContent">
          <div>
            <article className="title">
              {/* scrollable */}
              <p>How are you doing today Tosin ? 😅 </p>
              <span>Have a chat with bot </span>

              <div>
                <p>
                  At Mindmate, we help with relieving all stress, depression or
                  sadness you may feel
                </p>
                <img src="/emoj.png" alt="." />
              </div>
            </article>

            <article className="title">
              <p>Chat with Bot</p>

              <div style={{ background: "#f7f3f8" }}>
                <div>
                  <p>
                    Send a DM to our Bot that has been configured to make you
                    happy regardless of your worries
                  </p>{" "}
                  <br />
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
                      Chat now
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
                <img
                  src="/phone.png"
                  alt="."
                  style={{ width: "150px", height: "133px" }}
                />
              </div>
            </article>

            <article className="title">
              <p>Community </p>

              <div style={{ border: "1px solid #5f1e7e" }}>
                <div>
                  <p>
                    Join a community and speak to different people from
                    different places in the world
                  </p>{" "}
                  <br />
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
                <img
                  src="/phone.png"
                  alt="."
                  style={{ width: "150px", height: "133px" }}
                />
              </div>
            </article>
          </div>
          <aside>
            <h2>Relaxation Techniques</h2>
            <article className="techniques">
              <a href="/">
                <img src="/p1.png" alt="" />
                <span>Meditation</span>
              </a>
              <a href="/">
                <img src="/p2.png" alt="" />
                <span>Interactive Session</span>
              </a>
              <a href="/">
                <img src="/p3.png" alt="" />
                <span>Daily self-care reminders </span>
              </a>
              <a href="/">
                <img src="/p4.png" alt="" />
                <span>Mental care </span>
              </a>
              <a href="/">
                <img src="/p5.png" alt="" />
                <span>Therapy session scheduling</span>
              </a>
            </article>
            <article className="mood-tracker">
              <div className="mood-tracker-card">
                <h2>Mood Tracker</h2>
                <p>Rate your current mood on a scale of 1-5</p>

                <div className="flex-card">
                  <div>
                    <span
                      className="num"
                      style={{ border: "2px solid #faa2a2" }}
                    >
                      5
                    </span>
                    <span className="txt">Sad</span>
                  </div>
                  <div>
                    <span
                      className="num"
                      style={{ border: "2px solid #a0d5ae" }}
                    >
                      4
                    </span>
                    <span className="txt">Fair</span>
                  </div>
                  <div>
                    <span
                      className="num"
                      style={{ border: "2px solid #fbdb7f" }}
                    >
                      3
                    </span>
                    <span className="txt">Good</span>
                  </div>
                  <div>
                    <span
                      className="num"
                      style={{ border: "2px solid #a4c3f8" }}
                    >
                      2
                    </span>
                    <span className="txt">Happy</span>
                  </div>
                  <div>
                    <span
                      className="num"
                      style={{ border: "2px solid #dea1f8" }}
                    >
                      1
                    </span>
                    <span className="txt">Excited</span>
                  </div>
                </div>
              </div>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
