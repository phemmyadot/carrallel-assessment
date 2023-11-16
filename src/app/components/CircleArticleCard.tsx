"use client";

import React from "react";
import styles from "../styles/CircleArticleCard.module.css";
import Image from "next/image";

interface CircleArticleCardProps {
  title: string;
  imageUrl: string;
}

const CircleArticleCard: React.FC<CircleArticleCardProps> = ({
  title,
  imageUrl,
}) => {
  return (
    <div className={styles.circleArticleCard}>
      <Image
        src={imageUrl}
        alt={title}
        className={styles.cardImage}
        height={100}
        width={100}
      />
      <div className={styles.cardBody}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CircleArticleCard;
