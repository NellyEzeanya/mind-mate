import { useRef, useState } from "react";
import "../styles/Chat.css";

function ChatPage() {
  const chatsRef = useRef();
  const auth = localStorage.getItem("authToken");
  if (!auth) window.location.href = "/login";

  async function sendMessage(e) {
    e.preventDefault();
    const message = e.target.message.value;
    e.target.message.value = "";

    // add message to UI
    const messageElem = document.createElement("article");
    messageElem.classList.add("message");
    messageElem.innerText = message;
    chatsRef.current.append(messageElem);

    // submit to server
    const res = await fetch("https://mindmate-m3ak.onrender.com/bot/chat", {
      method: "POST",
      body: JSON.stringify({ prompt: message }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      const responseElem = document.createElement("article");
      responseElem.classList.add("response");
      const imLogo = document.createElement("img");
      imLogo.src = "/logo1.png";
      imLogo.width = 71;
      imLogo.height = 71;
      responseElem.append(imLogo);
      responseElem.innerHTML += data.MindMate.replace(
        /<\/?[^>]+(>|$)/g,
        ""
      ).replaceAll("\n", "<br />");
      chatsRef.current.append(responseElem);
    }
  }

  return (
    <div className="Chat">
      <nav className="sidebar">
        <div className="logo">
          <img src={"/logo1.png"} alt="." />
          <p>Mindmate</p>
        </div>
        <ul>
          <li>
            <a href="/app">
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
          <div className="flex">
            <div>
              <h2>Have a Chat with Bot</h2>
              <p>
                Hello, I am here to speak with you, what will you like to talk
                about ?
              </p>
            </div>

            <img
              src="https://avatars.dicebear.com/api/initials/John%20Doe.svg"
              alt=".."
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
        </header>

        <section className="chats" ref={chatsRef}>
          {/* <article className="message">Good morning</article>
          <article className="response">Good morning</article> */}
        </section>

        <form onSubmit={sendMessage} className="entry">
          <div className="inp">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.984 0C7.152 0 0 7.168 0 16C0 24.832 7.152 32 15.984 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 15.984 0ZM10.4 9.6C11.728 9.6 12.8 10.672 12.8 12C12.8 13.328 11.728 14.4 10.4 14.4C9.072 14.4 8 13.328 8 12C8 10.672 9.072 9.6 10.4 9.6ZM23.536 20.352C22.08 23.472 19.264 25.6 16 25.6C12.736 25.6 9.92 23.472 8.464 20.352C8.208 19.824 8.592 19.2 9.184 19.2H22.816C23.408 19.2 23.792 19.824 23.536 20.352ZM21.6 14.4C20.272 14.4 19.2 13.328 19.2 12C19.2 10.672 20.272 9.6 21.6 9.6C22.928 9.6 24 10.672 24 12C24 13.328 22.928 14.4 21.6 14.4Z"
                fill="#5F1E7E"
              />
            </svg>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Type a message..."
            />
          </div>
          <button className="send" type="submit">
            <svg
              width="31"
              height="32"
              viewBox="0 0 51 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 51.128L50.4 25.564L0 0V19.8831L36 25.564L0 31.2449V51.128Z"
                fill="#5F1E7E"
              />
            </svg>
          </button>
        </form>
      </main>
    </div>
  );
}

export default ChatPage;
