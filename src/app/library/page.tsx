"use client";

import { useState } from "react";
import ArticleList from "../components/ArticleList";
import SegmentedControl, { Segments } from "../components/SegmentedControl";
import styles from "../styles/LibraryPage.module.css";
import AdditionalResources from "../components/AdditionalResourcesList";

const LibraryPage = () => {
  const [activeSegment, setActiveSegment] = useState(Segments.All);

  return (
    <div className={styles.libraryContainer}>
      <SegmentedControl
        activeSegment={activeSegment}
        onSegmentChange={setActiveSegment}
      />
      <div>
        <h2 className={styles.sectionTitle}>Recommended</h2>
        <ArticleList />
      </div>
      <div>
        <h2 className={styles.sectionTitle}>Additional Resources</h2>
        <AdditionalResources />
      </div>
    </div>
  );
};

export default LibraryPage;
