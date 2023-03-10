import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("authToken");
    if (!auth) window.location.href = "/login";
    else setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Sidebar />
      <main>
        <header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px",
              border: "1px solid rgba(219, 209, 209, 0.75)",
              maxWidth: "250px",
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
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, auto)",
                      gap: "10px",
                    }}
                  >
                    <a
                      href="/chat"
                      style={{
                        borderRadius: "4px",
                        border: "1px solid #5f1e7e",
                        padding: "5px",
                        color: "white",
                        background: "#5f1e7e",
                        fontSize: "0.8rem",
                        display: "inline-block",
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
                        fontSize: "0.8rem",
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
