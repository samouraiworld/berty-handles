import styles from '../../styles/Home.module.css'
import Link from 'next/link'


export default function Header() {
    return(
     <section className={styles.header}>
        <Link href="/">
          <img className={styles.logo} alt="Berty's company logo" src="../img/logo.svg" />
        </Link>
    <div>
      <ul className={styles.navbar}>
        <li><Link className={styles.hov} href="/vision">Vision</Link></li>
        <li><Link className={styles.hov} href="/roadmap">Roadmap</Link></li>
        <li><Link className={styles.hov} href="/">Contribute</Link></li>
        <a href="#" className={styles.close}><i className={`${styles.fa} ${styles.faTimes}`}></i></a>
      </ul>
  </div>
  <div  className={`${styles.barContainer} ${styles.mobile}`}>
    <i className={`${styles.faSolid} ${styles.faBars} ${styles.bar}`}></i>
  </div>
  </section>
    )
}