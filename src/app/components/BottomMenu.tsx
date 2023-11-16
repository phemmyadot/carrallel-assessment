"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/BottomMenu.module.css";
import BottomMenuItem from "./BottomMenuItem";
import { usePathname } from "next/navigation";
import { SVGIconName } from "./SvgIcons";

const menuItems = [
  {
    linkUrl: "/",
    text: SVGIconName.HOME,
    isActive: false,
  },
  {
    linkUrl: "/library",
    text: SVGIconName.LIBRARY,
    isActive: false,
  },
  {
    linkUrl: "/plan",
    text: SVGIconName.PLAN,
    isActive: true,
  },
  {
    linkUrl: "/tools",
    text: SVGIconName.TOOLS,
    isActive: false,
  },
  {
    linkUrl: "/support",
    text: SVGIconName.SUPPORT,
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

  if (pathname === "/login" || pathname === "/signup") return <></>;

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
