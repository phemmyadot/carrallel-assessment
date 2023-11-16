"use client";

import React from "react";
import styles from "../styles/SegmentedControl.module.css";
export enum Segments {
  All = "All",
  Shared = "Shared",
  Bookmarks = "Bookmarks",
  Read = "Read",
}

interface SegmentedControlProps {
  activeSegment: Segments;
  onSegmentChange: (segment: Segments) => void;
}
const SegmentedControl: React.FC<SegmentedControlProps> = ({
  activeSegment,
  onSegmentChange,
}) => {
  return (
    <div className={styles.segmentedControl + " scrollable-row"}>
      {Object.values(Segments).map((segment, index) => (
        <div
          onClick={() => onSegmentChange(segment)}
          key={index}
          className={
            activeSegment === segment
              ? styles.activeSegment
              : styles.segmentButton
          }
        >
          {segment}
        </div>
      ))}
    </div>
  );
};

export default SegmentedControl;
