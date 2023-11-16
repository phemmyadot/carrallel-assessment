"use client";

import React from "react";
import styles from "../styles/AdditionalResource.module.css";
import Image from "next/image";
import SVGIcons, { SVGIconName } from "./SvgIcons";

interface AdditionalResourceProps {
  title: string;
  imageUrl: string;
  id: string;
}

const AdditionalResource: React.FC<AdditionalResourceProps> = ({
  title,
  imageUrl,
  id,
}) => {
  return (
    <a href={`/library/${id}`} className={styles.additionalResource}>
      <Image
        src={imageUrl}
        alt={title}
        className={styles.cardImage}
        height={50}
        width={50}
      />
      <div className={styles.cardBody}>
        <p>{title}</p>
      </div>
      <SVGIcons name={SVGIconName.ARROW_RIGHT} />
    </a>
  );
};

export default AdditionalResource;
