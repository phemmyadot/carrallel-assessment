"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/AdditionalResourcesList.module.css";
import AdditionalResource from "./AdditionalResource";
import { ArticleModel } from "../models/article.model";
import Loader from "./Loader";

const AdditionalResources: React.FC = () => {
  const [otherArticles, setOtherArticles] = useState<ArticleModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchArticles = async () => {
        const response = await fetch("/api/articles/other-resources");
        if (response.ok) {
          const json = await response.json();
          setOtherArticles(json.data);
        } else {
          console.log("Error fetching articles");
        }
      };
      fetchArticles();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {otherArticles.length === 0 && <div>No Articles found</div>}
      <div className={styles.additionalResourcesSection}>
        {otherArticles.map((article, index) => (
          <AdditionalResource
            id={article.id}
            key={index}
            title={article.title}
            imageUrl={article.previewImage ?? ""}
          />
        ))}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default AdditionalResources;
