import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";

function ProfilePage() {
  const auth = localStorage.getItem("authToken");
  if (!auth) window.location.href = "/login";
  return (
    <div className="Profile">
      <Sidebar />
      <main>
        <header>
          <img src="/default-profile.png" alt="profile" />
          <div>
            <div className="detail">
              <h2>Zainab</h2>
              <div>
                <button>Edit Profile</button>
              </div>
            </div>
            <p>bashiruzainab@gmail.com</p>
          </div>
        </header>

        <section>
          <div className="options">
            <p>Change Language</p>
            <select name="English" id="English">
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
          <div className="options">
            <p>Upgrade Account</p>
            <div>&gt;</div>
          </div>
          <div className="options">
            <p>Change Password</p>
            <div>&gt;</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
