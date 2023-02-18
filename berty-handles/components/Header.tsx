import Link from "next/link";
import { FC, useState } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/Home.module.css";

// TODO: extract styles from Home module

export const Header: FC = () => {
  const windowDimensions = useWindowDimensions();
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  let content;
  if (windowDimensions.width >= 800) {
    // navbar
    content = (
      <div>
        <ul className={styles.navbar}>
          <li>
            <Link className={styles.hov} href="/vision">
              Vision
            </Link>
          </li>
          <li>
            <Link className={styles.hov} href="/roadmap">
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              className={styles.hov}
              target="_blank"
              href="https://berty.tech/contribute">
              Contribute
            </Link>
          </li>
          <a href="#" className={styles.close}>
            <i className={`${styles.fa} ${styles.faTimes}`} />
          </a>
        </ul>
      </div>
    );
  } else {
    // burger menu
    content = (
      <>
        <button
          className={styles.burgerIconContainer}
          onClick={() => setShowBurgerMenu(true)}>
          <img width={20} height={20} src="/img/burger.svg" />
        </button>
        {showBurgerMenu && (
          <div
            className={styles.burgerMenu}
            onClick={() => setShowBurgerMenu(false)}>
            <ul className={styles.navbar}>
              <li>
                <Link className={styles.hov} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.hov} href="/vision">
                  Vision
                </Link>
              </li>
              <li>
                <Link className={styles.hov} href="/roadmap">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  className={styles.hov}
                  target="_blank"
                  href="https://berty.tech/contribute">
                  Contribute
                </Link>
              </li>
              <a href="#" className={styles.close}>
                <i className={`${styles.fa} ${styles.faTimes}`} />
              </a>
            </ul>
          </div>
        )}
      </>
    );
  }

  return (
    <section className={styles.header}>
      <Link href="/">
        <img
          className={styles.logo}
          alt="Berty's company logo"
          src="../img/logo.svg"
        />
      </Link>
      {content}
    </section>
  );
};
