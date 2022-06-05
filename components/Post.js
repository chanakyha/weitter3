import React from "react";
import { format } from "timeago.js";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";

const styles = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  weitt: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2 cursor-pointer`,
};

const Post = ({
  displayName,
  username,
  text,
  avatar,
  timestamp,
  isProfileImageNft,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={avatar} alt="profile-pic" className={styles.profileImage} />
        {isProfileImageNft && (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            NFT
          </span>
        )}
      </div>
      <div className={styles.postMain}>
        <div className={styles.headerDetails}>
          <span className={styles.name}>{displayName}</span>
          {isProfileImageNft && (
            <span className={styles.verified}>
              <BsFillPatchCheckFill fill="#1DA1F2" />
            </span>
          )}
          <span className={styles.handleAndTimeAgo}>
            @{username} · {format(new Date(timestamp).getTime())}
          </span>
        </div>
        <div className={styles.weitt}>{text}</div>
        <div className={styles.footer}>
          <div
            className={`${styles.footerIcon} hover:text-[#03ba7c] hover:bg-[#1b393b]`}
          >
            <FaRegComment />
          </div>
          <div
            className={`${styles.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1b393b]`}
          >
            <FaRetweet />
          </div>
          <div
            className={`${styles.footerIcon} hover:text-[#f91c80] hover:bg-[#1b393b]`}
          >
            <AiOutlineHeart />
          </div>
          <div
            className={`${styles.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1b393b]`}
          >
            <FiShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
