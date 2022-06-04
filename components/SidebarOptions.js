import React from "react";
import { useRouter } from "next/router";

const styles = {
  wrapper: `w-mi flex item-center rounded-[100px] p-4 cursor-pointer hover:bg-[#05252e] transition-all hover:duration-200 hover:ease-in-out`,
  iconContainer: `text-xl mr-4`,
  textGeneral: `font-medium`,
  textActive: `font-bold`,
};

const SidebarOptions = ({ text, Icon, isActive, setSelected, redirect }) => {
  const router = useRouter();

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setSelected(text);
        if (redirect) {
          router.push(redirect);
        }
      }}
    >
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? styles.textActive : styles.textGeneral}`}>
        {text}
      </div>
    </div>
  );
};

export default SidebarOptions;
