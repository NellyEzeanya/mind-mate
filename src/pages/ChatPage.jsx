import { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
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
      <Sidebar />
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
