"use client";

import React from "react";
import styles from "../styles/ArticleCard.module.css";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  imageUrl: string;
  id: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, imageUrl, id }) => {
  return (
    <a href={`/library/${id}`} className={styles.articleCard}>
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
    </a>
  );
};

export default ArticleCard;
