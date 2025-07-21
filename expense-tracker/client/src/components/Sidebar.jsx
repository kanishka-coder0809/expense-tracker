import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ sectionsRef, userName }) => {
  const [avatarEmoji, setAvatarEmoji] = useState("👨‍💻");
  const [showPicker, setShowPicker] = useState(false);
  const navigate = useNavigate();

  const togglePicker = () => setShowPicker(!showPicker);

  const handleEmojiSelect = (emoji) => {
    setAvatarEmoji(emoji.native);
    setShowPicker(false);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/"); // Redirects to login page
  };

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div
          className="avatar"
          onClick={togglePicker}
          title="Click to change emoji"
        >
          {avatarEmoji}
        </div>

        {showPicker && (
          <div className="emoji-picker">
            <Picker data={data} onEmojiSelect={handleEmojiSelect} theme="light" />
          </div>
        )}

        {/* ✅ Username below emoji */}
        <h3 className="username-display">{userName || "Guest"}</h3>
      </div>

      <nav className="nav-links">
        <button onClick={() => scrollToSection(sectionsRef.dashboardRef)}>🏠 Dashboard</button>
        <button onClick={() => scrollToSection(sectionsRef.incomeRef)}>💰 Income</button>
        <button onClick={() => scrollToSection(sectionsRef.expenseRef)}>💸 Expense</button>
        <button onClick={handleLogout}>🚪 Logout</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
