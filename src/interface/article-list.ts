import { StaticImageData } from "next/image";

export interface Article {
  date: string;
  imgSrc: StaticImageData;
  title: string;
  content: string;
}
export interface ArticleListProps {
  articles: Article[];
}

export interface ArticleItemProps {
  article: Article;
}
