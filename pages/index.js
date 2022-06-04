import React from "react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/home/Feed";
import Widgets from "../components/Widgets";

const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none text-white bg-[#002833]`,
  content: `max-w-[1400px] w-[90%] flex justify-between`,
};

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className={styles.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
