import React, { useContext } from "react";
import Router from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";
import Head from "next/head";
import { WeitterContext } from "../../context/WeitterContext";
const styles = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
};

const ProfileHeader = () => {
  const { currentAccount, currentUser } = useContext(WeitterContext);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={() => Router.push("/")}>
          <BsArrowLeftShort />
        </div>
        <div className={styles.details}>
          <div className={styles.primary}>Chanakyha</div>
          <div className={styles.secondary}>
            {currentUser && currentUser?.weitts?.length > 1
              ? `${currentUser?.weitts?.length} Weitts`
              : `${currentUser?.weitts?.length} Weitts`}
          </div>
        </div>
      </div>
      <div className={styles.coverPhotoContainer}>
        <img
          src={currentUser?.coverImage}
          alt="background Image"
          className={styles.coverPhoto}
        />
      </div>
      <div className={styles.profileImageContainer}>
        <div className={styles.profileImageContainer}>
          <img
            src="https://avatars.githubusercontent.com/u/66877639?v=4"
            alt="profile-image"
            className={styles.profileImage}
          />
        </div>
        {currentUser?.isProfileImageNft && (
          <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            NFT
          </span>
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.primary}>{currentUser?.name}</div>
        <div className={styles.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 8)}...{currentAccount.slice(-4)}
            </>
          )}
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.activeNav}>Weitts</div>
        <div>Weitts & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
