import React, { useContext } from "react";
import WeittBox from "./WeittBox";
import Post from "../Post";
import { WeitterContext } from "../../context/WeitterContext";

import { BsStars } from "react-icons/bs";

const styles = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#05252e] z-10 p-4 flex justify-between items-center`,
  headerTtile: `text-xl font-bold`,
};

const Feed = () => {
  const { weitts } = useContext(WeitterContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTtile}>Home</div>
        <BsStars />
      </div>
      <WeittBox />
      {weitts &&
        weitts.map((weitt, index) => (
          <Post
            key={index}
            text={weitt.weitt}
            avatar={weitt.author.profileImage}
            username={`${weitt.author.walletAddress.slice(
              0,
              4
            )}...${weitt.author.walletAddress.slice(-4)}`}
            displayName={weitt.author.name}
            isProfitImageNft={weitt.author.isProfitImageNft}
          />
        ))}
    </div>
  );
};

export default Feed;
