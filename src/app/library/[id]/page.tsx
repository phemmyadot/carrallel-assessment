"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/LibraryDetailsPage.module.css";
import { ArticleModel } from "@/app/models/article.model";
import { useParams } from "next/navigation";
import Image from "next/image";

const LibraryDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<ArticleModel | null>(null);
  const params = useParams();
  const articleId = params.id;

  useEffect(() => {
    try {
      setLoading(true);
      const fetchArticle = async () => {
        const response = await fetch(`/api/articles/${articleId}`);
        if (response.ok) {
          const json = await response.json();
          setArticle(json.data);
        } else {
          console.log("Error fetching articles");
        }
      };
      fetchArticle();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  // get id from url
  useEffect(() => {
    // fetch article details
  });
  return (
    <div className={styles.libraryContainer}>
      <Image
        className={styles.bannerImage}
        src={article?.imageUrl ?? ""}
        alt={article?.title ?? ""}
        height={200}
        width={300}
      />
      <div dangerouslySetInnerHTML={{ __html: article?.content ?? "" }}></div>
    </div>
  );
};

export default LibraryDetailsPage;
