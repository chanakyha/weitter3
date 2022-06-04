import React from 'react'

const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none text-white bg-black`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
      <h2>Sidebar</h2>
      <h2>Feed</h2>
      <h2>Widgets</h2>
      </div>
    </div>
  )
}

export default Home