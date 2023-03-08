import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Community.css";

function CommunityPage() {
  const auth = localStorage.getItem("authToken");
  if (!auth) window.location.href = "/login";
  return (
    <div className="Community">
      <Sidebar />
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
