import styles from '../../styles/Home.module.css'


export default function Footer() {
    return(
        <section className={styles.footer}>
        <div className={styles.colContainer}>
        <div className={styles.col1}>
          <img className={styles.logo} src="../img/berty_footer_logo.svg" alt="Berty' society logo"/>
          <p>The Berty app is developed by the NGO Berty Technologies.</p>
        </div>
  
        <div className={`${styles.col2} ${styles.strong}`}>
          <a href="#">Features</a>
          <a href="#">Challenges</a>
          <a href="#">FAQ</a>
          <a href="#">Community</a>
          <a href="#">Blog</a>
        </div>
  
        <div className={styles.col2}>
          <h4>Developpers</h4>
          <a href="#">Docs</a>
          <a href="#">Our Projects</a>
          <a href="#">Contribute</a>
          <a href="#">Projects we love</a>
        </div>
  
        <div className={styles.col2}>
          <h4>About Us</h4>
          <a href="#">Jobs</a>
          <a href="#">Newsletter</a>
          <a href="#">Contact</a>
          <a href="#">Press</a>
          <a href="#">Store</a>
          <a href="#">Assets</a>
        </div>
        </div>
  
        <div className={styles.copyright}>
        <div className={styles.copyrightTxt}>
          <p>Berty™️ is a registered trademark © 2018-2022 Berty Technologies - All right reserved - Terms & Conditions -
            Privacy Policy</p>
        </div>
        <div className={styles.follow}>
          <img className={styles.logo} src="../img/discord_logo.svg" alt="Discord logo"/>
          <img className={styles.logo} src="../img/twitter_logo.svg" alt="Tweeter logo"/>
          <img className={styles.logo} src="../img/github_logo.svg" alt="Github logo"/>
          <img className={styles.logo} src="../img/unknown_logo.svg" alt="Unknown logo"/>
          <img className={styles.logo} src="../img/linkedin_logo.svg" alt="Linkedin logo"/>
        </div>
      </div>
      </section>
    )
}