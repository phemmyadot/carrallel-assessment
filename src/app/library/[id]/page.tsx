"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/LibraryDetailsPage.module.css";
import { ArticleModel } from "@/app/models/article.model";
import { useParams } from "next/navigation";
import Image from "next/image";
import Loader from "@/app/components/Loader";
import Tags from "@/app/components/Tags";
import AdditionalResources from "@/app/components/AdditionalResourcesList";
import ArticleCard from "@/app/components/ArticleCard";

const LibraryDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<ArticleModel | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<ArticleModel[]>([]);

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
  }, [articleId]);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchArticles = async () => {
        const response = await fetch(`/api/articles/${articleId}/related`);
        if (response.ok) {
          const json = await response.json();
          setRelatedArticles(json.data);
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
      <div className={styles.libraryContainer}>
        <Image
          className={styles.bannerImage}
          src={article?.imageUrl ?? ""}
          alt={article?.title ?? ""}
          height={200}
          width={300}
        />
        <div className={styles.articleBody}>
          <div
            dangerouslySetInnerHTML={{ __html: article?.content ?? "" }}
          ></div>
        </div>

        <Tags tags={article?.tags ?? []} />
        <div>
          <h2 className={styles.sectionTitle}>Related Resources</h2>
          <div className={styles.articleSection + " scrollable-row"}>
            {relatedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                imageUrl={article.previewImage ?? ""}
              />
            ))}
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default LibraryDetailsPage;
