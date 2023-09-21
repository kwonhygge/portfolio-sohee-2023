import Image from "next/image";

import { ArticleItemProps } from "@/src/interface/article-list";
import { manrope } from "@/src/styles/font";

import styles from "./ArticleItem.module.css";

export default function ArticleItem(props: ArticleItemProps) {
  const { article } = props;
  const { date, imgSrc, title, content } = article;

  return (
    <article className={styles.article}>
      <Image src={imgSrc} width={470} height={470} alt={title} />
      <span className={styles.date}>{date}</span>
      <h3 className={manrope.className}>{title}</h3>
      <p>{content}</p>
    </article>
  );
}
