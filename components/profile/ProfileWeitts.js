import React from "react";
import Post from "../Post";

const styles = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
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

const ProfileWeitts = () => {
  return (
    <div className={styles.wrapper}>
      {weitts?.map((weitt, index) => (
        <Post
          key={index}
          text={weitt.text}
          avatar={weitt.avatar}
          username={`${weitt.username.slice(0, 4)}...${weitt.username.slice(
            -4
          )}`}
          displayName={weitt.displayName}
          isProfitImageNft={weitt.isProfileImageNft}
          timestamp={weitt.timestamp}
        />
      ))}
    </div>
  );
};

export default ProfileWeitts;
