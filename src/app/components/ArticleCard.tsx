import React from "react";
import styles from "../styles/ArticleCard.module.css";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
    </div>
  );
};

export default ArticleCard;
