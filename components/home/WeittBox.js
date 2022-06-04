import React, { useState } from "react";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiFileGifLine, RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";

const styles = {
  wrapper: `px-4 flex flex-row border-b bg-[#05252e] border-[#38444d] pb-4`,
  weittBoxLeft: `mr-4`,
  weittBoxRight: `flex-1`,
  profileImage: `w-12 h-12 rounded-full cursor-pointer`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2 fill-[#319177] cursor-pointer`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#2f4f4f] text-[#95999e]`,
  activeSubmit: `bg-[#319177] text-white`,
};

const weittBox = () => {
  const [weittMessage, setweittMessage] = useState("");

  const postWeitt = (e) => {
    e.preventDefault();
    console.log(weittMessage);
    setweittMessage("");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.weittBoxLeft}>
        <img
          src="https://avatars.githubusercontent.com/u/66877639?v=4"
          alt="profile-image"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.weittBoxRight}>
        <form>
          <textarea
            className={styles.inputField}
            placeholder="What's happening"
            value={weittMessage}
            onChange={(e) => setweittMessage(e.target.value)}
          />
          <div className={styles.formLowerContainer}>
            <div className={styles.iconsContainer}>
              <BsCardImage className={styles.icon} />
              <RiFileGifLine className={styles.icon} />
              <RiBarChartHorizontalFill className={styles.icon} />
              <BsEmojiSmile className={styles.icon} />
              <IoMdCalendar className={styles.icon} />
              <MdOutlineLocationOn className={styles.icon} />
            </div>
            <button
              type="submit"
              className={`${styles.submitGeneral} ${
                weittMessage ? styles.activeSubmit : styles.inactiveSubmit
              }`}
              disabled={!weittMessage}
              onClick={postWeitt}
            >
              Weitt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default weittBox;
