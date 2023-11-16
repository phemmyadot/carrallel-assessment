"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/BottomMenu.module.css";
import BottomMenuItem from "./BottomMenuItem";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    linkUrl: "/",
    text: "Home",
    isActive: false,
  },
  {
    linkUrl: "/library",
    text: "Library",
    isActive: false,
  },
  {
    linkUrl: "/plan",
    text: "Plan",
    isActive: true,
  },
  {
    linkUrl: "/tools",
    text: "Tools",
    isActive: false,
  },
  {
    linkUrl: "/support",
    text: "Support",
    isActive: false,
  },
];

const Menu: React.FC = () => {
  const [bottomMenuItems, setBottomMenuItems] = useState(menuItems);

  const pathname = usePathname();

  useEffect(() => {
    const updatedMenuItems = [...bottomMenuItems].map((item, i) => {
      if (item.linkUrl === pathname) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    });
    setBottomMenuItems(updatedMenuItems);
  }, [pathname]);

  return (
    <>
      {/* Bottom Navigation for Mobile Screens */}
      <nav className={styles.navMobile}>
        {bottomMenuItems.map((item, i) => (
          <BottomMenuItem {...item} key={i} />
        ))}
      </nav>
    </>
  );
};

export default Menu;
function callback(arg0: (index: any) => void) {
  throw new Error("Function not implemented.");
}
