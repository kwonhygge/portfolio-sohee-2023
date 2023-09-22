import { manrope } from "@/src/styles/font";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${manrope.className} ${styles.header}`}>
      <nav className={styles.nav}>
        <h1>
          <a href="/">Sohee</a>
        </h1>
        <ul>
          <li>
            <a href="/projects">Project</a>
          </li>
          <li>
            <a href="/info">Info</a>
          </li>
          <li className={styles.brunch}>
            <a href="/brunch">B</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
