import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BottomMenu.module.css";
import SVGIcons, { SVGIconName } from "./SvgIcons";

interface BottomMenuItemProps {
  linkUrl: string;
  text: SVGIconName;
  isActive?: boolean;
}

const BottomMenuItem: React.FC<BottomMenuItemProps> = ({
  linkUrl,
  text,
  isActive,
}) => {
  const color = isActive ? "#015f01" : "#808080";
  return (
    <div className={styles.bottomMenuItem}>
      <Link href={linkUrl}>
        {text !== SVGIconName.SUPPORT && <SVGIcons name={text} color={color} />}
        {text === SVGIconName.SUPPORT && (
          <Image
            src="/support.jpg"
            height={24}
            width={24}
            className={styles.avatar}
            alt="support"
          />
        )}
        <span style={{ color: color }}>{text}</span>
      </Link>
    </div>
  );
};

export default BottomMenuItem;
