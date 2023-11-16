"use client";

import React from "react";
import styles from "../styles/CircleArticleCard.module.css";
import Image from "next/image";

interface CircleArticleCardProps {
  title: string;
  imageUrl: string;
  id: string;
}

const CircleArticleCard: React.FC<CircleArticleCardProps> = ({
  title,
  imageUrl,
  id,
}) => {
  return (
    <a
      data-testid="circle-article-card"
      href={`/library/${id}`}
      className={styles.circleArticleCard}
    >
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
    </a>
  );
};

export default CircleArticleCard;
