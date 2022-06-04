import React, { useContext } from "react";
import { WeitterContext } from "../context/WeitterContext";
import Sidebar from "../components/Sidebar";
import Feed from "../components/home/Feed";
import Widgets from "../components/Widgets";
const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none text-white bg-[#002833]`,
  content: `max-w-[1400px] w-[90%] flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
};

const Home = () => {
  const { appStatus, connectWallet } = useContext(WeitterContext);

  const app = (status = appStatus) => {
    switch (status) {
      case "connected":
        return userLoggedIn;

      case "notConnected":
        return noUserFound;

      case "noMetaMask":
        return noMetaMaskFound;

      case "error":
        return error;

      default:
        return loading;
    }
  };

  const userLoggedIn = (
    <div className={styles.content}>
      <Sidebar initialSelectedIcon={"Home"} />
      <Feed />
      <Widgets />
    </div>
  );

  const noUserFound = (
    <div className={styles.loginContainer}>
      <img
        src="https://raw.githubusercontent.com/CleverProgrammers/twitter-blockchain-youtube/main/client/assets/metamask.png"
        width={200}
        height={200}
      />
      <div
        className={styles.walletConnectButton}
        onClick={() => connectWallet()}
      >
        Connect Wallet
      </div>
      <div className={styles.loginContent}>Connect to Metamask.</div>
    </div>
  );

  const noMetaMaskFound = (
    <div className={styles.loginContainer}>
      <img
        src="https://github.com/CleverProgrammers/twitter-blockchain-youtube/blob/main/client/assets/metamask.png?raw=true"
        width={200}
        height={200}
      />
      <div className={styles.loginContent}>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  );

  const error = (
    <div className={styles.loginContainer}>
      <img
        src="https://raw.githubusercontent.com/CleverProgrammers/twitter-blockchain-youtube/main/client/assets/error.png"
        width={250}
        height={200}
      />
      <div className={styles.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  );

  const loading = (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>Loading...</div>
    </div>
  );

  return <div className={styles.wrapper}>{app(appStatus)}</div>;
};

export default Home;
