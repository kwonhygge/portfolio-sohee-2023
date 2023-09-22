import ArticleList from "@/src/components/article-list/ArticleList";
import Header from "@/src/components/header/Header";
import { articleList } from "@/src/contents/article-list";
import { manrope } from "@/src/styles/font";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={manrope.className}>
      <Header />
      <section className={styles.section}>
        <ArticleList articles={articleList} />
      </section>
    </main>
  );
}
