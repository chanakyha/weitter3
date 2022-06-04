import React from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileWeitts from "../components/profile/ProfileWeitts";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#002833] text-white`,
  content: `max-w-[1400px] w-[80%] flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
};

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.mainContent}>
          <ProfileHeader />
          <ProfileWeitts />
        </div>
        <Widgets />
      </div>
    </div>
  );
};

export default Profile;
