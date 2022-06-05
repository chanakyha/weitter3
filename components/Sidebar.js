import React, { useState, useContext } from "react";
import { WeitterContext } from "../context/WeitterContext";
import { useRouter } from "next/router";
import SidebarOptions from "./SidebarOptions";
import Modal from "react-modal";
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { customStyles } from "../assets/static-data/constants";
import { BiHash } from "react-icons/bi";
import { FiBell, FiMoreHorizontal } from "react-icons/fi";
import ProfileImageMinter from "./mintingModal/ProfileImageMinter";
import {
  BsBookmarkFill,
  BsBookmark,
  BsPersonFill,
  BsPerson,
} from "react-icons/bs";
import { GiHummingbird } from "react-icons/gi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";

const styles = {
  wrapper: `flex-[1] px-8 flex flex-col`,
  weitterIconContainer: `text-3xl m-4`,
  weitterButton: `bg-[#319177] hover:bg-[#7dad9f] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#05252e] rounded-[100px] p-2`,
  profileLeft: `flex items-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  profileDetails: `flex flex-col`,
  details: `flex-1 flex space-x-4 items-center`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
};

const Sidebar = ({ initialSeletedIcon = "Home" }) => {
  const [selected, setSelected] = useState(initialSeletedIcon);
  const Router = useRouter();
  const { currentAccount, currentUser } = useContext(WeitterContext);
  console.log(currentUser);
  return (
    <div className={styles.wrapper}>
      <div className={styles.weitterIconContainer}>
        <GiHummingbird />
      </div>
      <div className={styles.navContainer}>
        <SidebarOptions
          text="Home"
          Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
          setSelected={setSelected}
          isActive={Boolean(selected === "Home")}
          redirect={"/"}
        />
        <SidebarOptions
          text="Explore"
          Icon={selected === "Explore" ? FaHashtag : BiHash}
          setSelected={setSelected}
          isActive={Boolean(selected === "Explore")}
          redirect={"/"}
        />
        <SidebarOptions
          text="Notifications"
          Icon={selected === "Notifications" ? FaBell : FiBell}
          setSelected={setSelected}
          isActive={Boolean(selected === "Notifications")}
          redirect={"/"}
        />
        <SidebarOptions
          text="Bookmarks"
          Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
          setSelected={setSelected}
          isActive={Boolean(selected === "Bookmarks")}
          redirect={"/"}
        />
        <SidebarOptions
          text="Messages"
          Icon={selected === "Messages" ? HiMail : HiOutlineMail}
          setSelected={setSelected}
          isActive={Boolean(selected === "Messages")}
          redirect={"/"}
        />
        <SidebarOptions
          text="List"
          Icon={selected === "List" ? RiFileList2Fill : FaRegListAlt}
          setSelected={setSelected}
          isActive={Boolean(selected === "List")}
          redirect={"/"}
        />
        <SidebarOptions
          text="Profile"
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          setSelected={setSelected}
          isActive={Boolean(selected === "Profile")}
          redirect={"/profile"}
        />
        <SidebarOptions
          text="More.."
          Icon={CgMoreO}
          setSelected={setSelected}
          isActive={Boolean(selected === "More")}
          redirect={"/"}
        />
        <div
          onClick={() =>
            Router.push(`${Router.pathname}/?mint=${currentAccount}`)
          }
          className={styles.weitterButton}
        >
          Mint
        </div>
      </div>
      <div className={styles.profileButton}>
        <div className={styles.profileLeft}>
          <img
            src={currentUser?.profileImage}
            alt="profile-pic"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.profileRight}>
          <div className={styles.details}>
            <div className={styles.profileDetails}>
              <div className={styles.name}>{currentUser.name}</div>
              <div className={styles.handle}>
                @{currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}
              </div>
            </div>
          </div>
          <div className={styles.moreContainer}>
            {currentUser?.isProfileImageNft && (
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                NFT
              </span>
            )}
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <Modal
        isOpen={Boolean(Router.query.mint)}
        onRequestClose={() => Router.back()}
        style={customStyles}
      >
        <ProfileImageMinter />
      </Modal>
    </div>
  );
};

export default Sidebar;
