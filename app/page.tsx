import EMC from "@/public/img/emc.png";
import Dyne from "@/public/img/dyne.png";
import BabyDraw from "@/public/img/baby-draw.png";
import SunSun from "@/public/img/sun-sun.png";
import Turnable from "@/public/img/turnable.png";
import Nowon from "@/public/img/nowon.jpg";
import Wiflat from "@/public/img/wiflat.png";
import { Article } from "@/src/interface/article-list";
import ArticleList from "@/src/components/article-list/ArticleList";
import Header from "@/src/components/header/Header";
import { manrope } from "@/src/styles/font";

const articleList: Article[] = [
  {
    date: "2021",
    imgSrc: EMC,
    title: "emc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc.",
  },
  {
    date: "2021",
    imgSrc: Dyne,
    title: "dyne",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc.",
  },
  {
    date: "2021",
    imgSrc: BabyDraw,
    title: "baby-draw",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc.",
  },
  {
    date: "2021",
    imgSrc: SunSun,
    title: "sun-sun",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc.",
  },
  {
    date: "2021",
    imgSrc: Turnable,
    title: "turnable",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc.",
  },
  {
    date: "2021",
    imgSrc: Nowon,
    title: "nowon",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc.",
  },
  {
    date: "2021",
    imgSrc: Wiflat,
    title: "wiflat",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc. Sed euismod, diam sit amet aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nunc nisl quis nunc.",
  },
];
export default function Home() {
  return (
    <main className={manrope.className}>
      <Header />
      <ArticleList articles={articleList} />
    </main>
  );
}
