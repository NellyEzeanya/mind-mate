import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Community.css";

function CommunityPage() {
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
    <div className="Community">
      <Sidebar />
      <main>
        <div className="coming-soon">COMING SOON!!!!!</div>
      </main>
    </div>
  );
}

export default CommunityPage;
