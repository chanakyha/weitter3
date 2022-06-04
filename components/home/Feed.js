import React from "react";
import WeittBox from "./WeittBox";

import { BsStars } from "react-icons/bs";

const styles = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#05252e] z-10 p-4 flex justify-between items-center`,
  headerTtile: `text-xl font-bold`,
};

const Feed = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTtile}>Home</div>
        <BsStars />
      </div>
      <WeittBox />
    </div>
  );
};

export default Feed;
