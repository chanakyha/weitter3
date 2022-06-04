import React from "react";
import WeittBox from "./WeittBox";
import Post from "../Post";

import { BsStars } from "react-icons/bs";

const styles = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#05252e] z-10 p-4 flex justify-between items-center`,
  headerTtile: `text-xl font-bold`,
};

const weitts = [
  {
    displayName: "Chanakyha",
    username: "0x638393gf3kwjegw0rhifiuwgfiwf3845495yfbfd",
    avatar: "https://avatars.githubusercontent.com/u/66877639?v=4",
    text: "Hello Hi",
    isProfileImageNft: false,
    timestamp: "2020-05-05T12:00:00.000Z",
  },
  {
    displayName: "Chanakyha",
    username: "0x638393gf3kwjegw0rhifiuwgfiwf3845495yfbfd",
    avatar: "https://avatars.githubusercontent.com/u/66877639?v=4",
    text: "Hello Hi",
    isProfileImageNft: false,
    timestamp: "2020-05-05T12:00:00.000Z",
  },
  {
    displayName: "Chanakyha",
    username: "0x638393gf3kwjegw0rhifiuwgfiwf3845495yfbfd",
    avatar: "https://avatars.githubusercontent.com/u/66877639?v=4",
    text: "Hello Hi",
    isProfileImageNft: false,
    timestamp: "2020-05-05T12:00:00.000Z",
  },
];

const Feed = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTtile}>Home</div>
        <BsStars />
      </div>
      <WeittBox />
      {weitts.map((weitt, index) => (
        <Post
          text={weitt.text}
          avatar={weitt.avatar}
          username={`${weitt.username.slice(0, 4)}...${weitt.username.slice(
            -4
          )}`}
          displayName={weitt.displayName}
        />
      ))}
    </div>
  );
};

export default Feed;
