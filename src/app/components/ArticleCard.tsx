"use client";

import React from "react";
import styles from "../styles/ArticleCard.module.css";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, imageUrl }) => {
  return (
    <div className={styles.articleCard}>
      <Image
        src={imageUrl}
        alt={title}
        className={styles.cardImage}
        height={100}
        width={600}
      />
      <div className={styles.cardBody}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
