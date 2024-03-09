import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
import DashPost from "../components/DashPost";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState(" ");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="">
        {/* SideBar */}
        <DashSideBar />
      </div>
      {/* profile */}
      {tab === "profile" && <DashProfile />}

      {tab==="posts" && <DashPost/>}
    </div>
  );
}
