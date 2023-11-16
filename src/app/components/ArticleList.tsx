"use client";

import React, { useState } from "react";
import styles from "../styles/ArticleList.module.css";
import ArticleCard from "./ArticleCard";
import CircleArticleCard from "./CircleArticleCard";

const ArticleList: React.FC = () => {
  // Dummy data for the cards
  const articles = [
    {
      title: "Decoding Dementia: A Caregiver's Handbook",
      content: "A Caregiver's Handbook",
      imageUrl: "/support.jpg",
    },
    {
      title: "Decoding Dementia: A Caregiver's Handbook",
      content: "A Caregiver's Handbook",
      imageUrl: "/support.jpg",
    },
    {
      title: "Decoding Dementia: A Caregiver's Handbook",
      content: "A Caregiver's Handbook",
      imageUrl: "/support.jpg",
    },
    {
      title: "Decoding Dementia: A Caregiver's Handbook",
      content: "A Caregiver's Handbook",
      imageUrl: "/support.jpg",
    },
  ];
  // Dummy data for the cards
  const otherArticles = [
    {
      title: "My family and relationships",
      content: "A Caregiver's Handbook",
      imageUrl: "/support.jpg",
    },
    {
      title: "My family and relationships",
      content: "A Caregiver's Handbook",
      imageUrl: "/support.jpg",
    },
    {
      title: "My family and relationships",
      content: "A Caregiver's Handbook",
      imageUrl: "/support.jpg",
    },
    {
      title: "My family and relationships",
      content: "A Caregiver's Handbook",
      imageUrl: "/support.jpg",
    },
  ];

  return (
    <>
      <div className={styles.articleSection + " scrollable-row"}>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
      <div className={styles.circleArticleSection + " scrollable-row"}>
        {otherArticles.map((article, index) => (
          <CircleArticleCard
            key={index}
            title={article.title}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ArticleList;
