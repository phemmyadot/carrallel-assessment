"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import SVGIcons, { SVGIconName } from "./SvgIcons";
import { usePathname, useRouter } from "next/navigation";
import PopupMenu from "./PopupMenu";

const Header: React.FC = () => {
  const [title, setTitle] = React.useState("Home");

  const pathname = usePathname();
  useEffect(() => {
    const title = pathname.replace("/", "") || "Home";
    setTitle(title.charAt(0).toUpperCase() + title.slice(1));
  }, [pathname]);

  if (pathname === "/login" || pathname === "/signup") return <></>;

  return (
    <header className={styles.header}>
      <div className={styles.settingIcon}>
        <div className={styles.mobileMenuIcon}>
          <SVGIcons name={SVGIconName.SETTINGS} />
        </div>
        <PopupMenu />
      </div>

      <h1 className={styles.title}>{title}</h1>
      <div className={styles.mobileMenuIcon}>
        <SVGIcons name={SVGIconName.NOTIFICATION} />
      </div>

      {/* Navigation Links for Large Screens */}
      <nav className={styles.menuList}>
        <Link href="/">Home</Link>
        <Link href="/library">Library</Link>
        <Link href="/plan">Plan</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/support">Support</Link>
      </nav>
      <nav className={styles.menuList}>
        <div className={styles.settingIcon}>
          <div className={styles.largeScreenIcon}>
            <SVGIcons name={SVGIconName.SETTINGS} />
          </div>
          <PopupMenu />
        </div>
        <div className={styles.largeScreenIcon}>
          <SVGIcons name={SVGIconName.NOTIFICATION} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
