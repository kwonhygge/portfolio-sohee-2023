import Image from "next/image";

import { ArticleItemProps } from "@/src/interface/article-list";
import { manrope, notoSansKR } from "@/src/styles/font";

import styles from "./ArticleItem.module.css";

export default function ArticleItem(props: ArticleItemProps) {
  const { article } = props;
  const { date, imgSrc, title, content } = article;

  return (
    <article className={styles.article}>
      <time className={styles.date}>{date}</time>
      <h3 className={manrope.className}>{title}</h3>
      <p className={`${notoSansKR.className} ${styles.content}`}>{content}</p>
      <Image
        src={imgSrc}
        width={540}
        height={360}
        alt={title}
        placeholder={"blur"}
      />
    </article>
  );
}
