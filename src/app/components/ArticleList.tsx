"use client";

import React, { use, useEffect, useState } from "react";
import styles from "../styles/ArticleList.module.css";
import ArticleCard from "./ArticleCard";
import CircleArticleCard from "./CircleArticleCard";
import { ArticleModel } from "../models/article.model";
import { set } from "mongoose";
import Loader from "./Loader";

const ArticleList: React.FC = () => {
  const [recommendedArticles, setRecommendedArticles] = useState<
    ArticleModel[]
  >([]);
  const [otherArticles, setOtherArticles] = useState<ArticleModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchArticles = async () => {
        const response = await fetch("/api/articles/recommended");
        if (response.ok) {
          const json = await response.json();
          setRecommendedArticles(json.data);
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
      {recommendedArticles.length === 0 && (
        <div data-testid="no-articles">No Articles found</div>
      )}
      <div className={styles.articleSection + " scrollable-row"}>
        {recommendedArticles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            imageUrl={article.previewImage ?? ""}
          />
        ))}
      </div>
      <div className={styles.circleArticleSection + " scrollable-row"}>
        {otherArticles.map((article, index) => (
          <CircleArticleCard
            key={index}
            id={article.id}
            title={article.title}
            imageUrl={article.previewImage ?? ""}
          />
        ))}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default ArticleList;
