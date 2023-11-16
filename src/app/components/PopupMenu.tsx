import React, { RefObject, useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/navigation";

const PopupMenu: React.FC = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await fetch("/api/logout");
      if (response.ok) {
        router.push("/login");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className={styles.dropdownContent} onClick={logout}>
        Logout
      </div>
    </>
  );
};

export default PopupMenu;
