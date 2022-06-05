import React, { useContext } from "react";
import Post from "../Post";
import { WeitterContext } from "../../context/WeitterContext";

const styles = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const ProfileWeitts = () => {
  const { curentUser, currentAccount, weitts } = useContext(WeitterContext);

  return (
    <div className={styles.wrapper}>
      {weitts?.map((weitt, index) => (
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

export default ProfileWeitts;
