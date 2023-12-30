import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "6769264_60111.jpg"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0]?.url);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src="6769264_60111.jpg" className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="/library" icon={<FaSignOutAlt />} />
    </div>
  );
}
