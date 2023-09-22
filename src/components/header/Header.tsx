import Link from "next/link";

import { BRUNCH_URL, INFO_URL, MAIN_URL, WORKS_URL } from "@/src/constants/url";
import { manrope } from "@/src/styles/font";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${manrope.className} ${styles.header}`}>
      <nav className={styles.nav}>
        <h1>
          <Link href={MAIN_URL}>hee</Link>
        </h1>
        <ul>
          <li>
            <Link href={WORKS_URL}>Works</Link>
          </li>
          <li>
            <Link href={INFO_URL}>Info</Link>
          </li>
          <li>
            <Link href={BRUNCH_URL} rel="noopener noreferrer" target="_blank">
              Brunch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
