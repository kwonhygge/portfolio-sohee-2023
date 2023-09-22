import { manrope } from "@/src/styles/font";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${manrope.className} ${styles.header}`}>
      <nav className={styles.nav}>
        <h1>
          <a href="/">hee</a>
        </h1>
        <ul>
          <li>
            <a href="/projects">Works</a>
          </li>
          <li>
            <a href="/info">Info</a>
          </li>
          <li>
            <a href="/brunch">Brunch</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
