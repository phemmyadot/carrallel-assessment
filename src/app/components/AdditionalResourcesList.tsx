"use client";

import React, { useState } from "react";
import styles from "../styles/AdditionalResourcesList.module.css";
import AdditionalResource from "./AdditionalResource";

const AdditionalResources: React.FC = () => {
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
      <div className={styles.additionalResourcesSection}>
        {articles.map((article, index) => (
          <AdditionalResource
            key={index}
            title={article.title}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default AdditionalResources;
