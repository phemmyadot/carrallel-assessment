import styles from "../styles/Tags.module.css";

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      <div className={styles.tags}>
        {tags.map((tag, id) => (
          <div key={id} className={styles.tag}>
            {tag}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tags;
