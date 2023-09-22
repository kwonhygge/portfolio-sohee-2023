import ArticleList from "@/src/components/article-list/ArticleList";
import Header from "@/src/components/header/Header";
import { Article } from "@/src/interface/article-list";
import { manrope } from "@/src/styles/font";

import styles from "./page.module.css";
import BabyDraw from "@/public/img/baby-draw.png";
import Dyne from "@/public/img/dyne.png";
import EMC from "@/public/img/emc.png";
import Nowon from "@/public/img/nowon.jpg";
import SunSun from "@/public/img/sun-sun.png";
import Turnable from "@/public/img/turnable.png";
import Wiflat from "@/public/img/wiflat.png";

const articleList: Article[] = [
  {
    date: "2021",
    imgSrc: EMC,
    title: "SUNSUN KITCHEN",
    content:
      "선선한주방은 개인과 환경 모두를 고려한 친환경 용품을 통해 자연을 닮은 주방을 만들어갑니다. 우리집 주방이 자연을 가장 가까이에 느낄 수 있는 공간이 되길 바라는 기업의 철학이 고객경험으로 이어질 수 있도록 리브랜딩을 진행합니다.",
  },
  {
    date: "2021",
    imgSrc: Dyne,
    title: "DYNE",
    content:
      "선선한주방은 개인과 환경 모두를 고려한 친환경 용품을 통해 자연을 닮은 주방을 만들어갑니다. 우리집 주방이 자연을 가장 가까이에 느낄 수 있는 공간이 되길 바라는 기업의 철학이 고객경험으로 이어질 수 있도록 리브랜딩을 진행합니다.",
  },
  {
    date: "2021",
    imgSrc: BabyDraw,
    title: "BABY DRAW",
    content:
      "선선한주방은 개인과 환경 모두를 고려한 친환경 용품을 통해 자연을 닮은 주방을 만들어갑니다. 우리집 주방이 자연을 가장 가까이에 느낄 수 있는 공간이 되길 바라는 기업의 철학이 고객경험으로 이어질 수 있도록 리브랜딩을 진행합니다.",
  },
  {
    date: "2021",
    imgSrc: SunSun,
    title: "sun-sun",
    content:
      "선선한주방은 개인과 환경 모두를 고려한 친환경 용품을 통해 자연을 닮은 주방을 만들어갑니다. 우리집 주방이 자연을 가장 가까이에 느낄 수 있는 공간이 되길 바라는 기업의 철학이 고객경험으로 이어질 수 있도록 리브랜딩을 진행합니다.",
  },
  {
    date: "2021",
    imgSrc: Turnable,
    title: "turnable",
    content:
      "선선한주방은 개인과 환경 모두를 고려한 친환경 용품을 통해 자연을 닮은 주방을 만들어갑니다. 우리집 주방이 자연을 가장 가까이에 느낄 수 있는 공간이 되길 바라는 기업의 철학이 고객경험으로 이어질 수 있도록 리브랜딩을 진행합니다.",
  },
  {
    date: "2021",
    imgSrc: Nowon,
    title: "nowon",
    content:
      "선선한주방은 개인과 환경 모두를 고려한 친환경 용품을 통해 자연을 닮은 주방을 만들어갑니다. 우리집 주방이 자연을 가장 가까이에 느낄 수 있는 공간이 되길 바라는 기업의 철학이 고객경험으로 이어질 수 있도록 리브랜딩을 진행합니다.",
  },
  {
    date: "2021",
    imgSrc: Wiflat,
    title: "wiflat",
    content:
      "선선한주방은 개인과 환경 모두를 고려한 친환경 용품을 통해 자연을 닮은 주방을 만들어갑니다. 우리집 주방이 자연을 가장 가까이에 느낄 수 있는 공간이 되길 바라는 기업의 철학이 고객경험으로 이어질 수 있도록 리브랜딩을 진행합니다.",
  },
];
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
