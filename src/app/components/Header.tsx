"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import SVGIcons, { SVGIconName } from "./SvgIcons";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [title, setTitle] = React.useState("Home");
  const pathname = usePathname();
  useEffect(() => {
    const title = pathname.replace("/", "") || "Home";
    setTitle(title.charAt(0).toUpperCase() + title.slice(1));
  }, [pathname]);

  return (
    <header className={styles.header}>
      <SVGIcons name={SVGIconName.SETTINGS} />

      <h1 className={styles.title}>{title}</h1>
      <SVGIcons name={SVGIconName.NOTIFICATION} />

      {/* Navigation Links for Large Screens */}
      <nav className={styles.menuList}>
        <Link href="/">Home</Link>
        <Link href="/library">Library</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </header>
  );
};

export default Header;
