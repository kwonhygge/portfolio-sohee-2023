import ArticleItem from "@/src/components/article-item/ArticleItem";
import { ArticleListProps } from "@/src/interface/article-list";

import styles from "./ArticleList.module.css";

export default function ArticleList(props: ArticleListProps) {
  const { articles } = props;

  return (
    <ul className={styles.list}>
      {articles.map((article, index) => (
        <li key={`article-${index + 1}`}>
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  );
}
