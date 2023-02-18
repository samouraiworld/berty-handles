import styles from "../styles/Home.module.css";

// TODO: extract styles from Home module

export function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.colContainer}>
        <div className={styles.col1}>
          <img
            className={styles.logo}
            src="../img/berty_footer_logo.svg"
            alt="Berty' society logo"
          />
          <p>The Berty app is developed by the NGO Berty Technologies.</p>
        </div>

        <div className={`${styles.col2} ${styles.strong}`}>
          <a href="https://berty.tech/features">Features</a>
          <a href="https://berty.tech/challenges">Challenges</a>
          <a href="https://berty.tech/faq">FAQ</a>
          <a href="https://berty.tech/community">Community</a>
          <a href="https://berty.tech/blog">Blog</a>
        </div>

        <div className={styles.col2}>
          <h4>Developpers</h4>
          <a href="https://berty.tech/docs">Docs</a>
          <a href="https://berty.tech/docs#projects">Our Projects</a>
          <a href="https://berty.tech/contribute">Contribute</a>
          <a href="https://berty.tech/contribute#projects-we-love">
            Projects we love
          </a>
        </div>

        <div className={styles.col2}>
          <h4> About Us</h4>
          <a href="https://berty.crew.work/jobs">Jobs</a>
          <a href="https://berty.tech/newsletter">Newsletter</a>
          <a href="https://berty.tech/contact">Contact</a>
          <a href="https://berty.tech/press">Press</a>
          <a href="https://berty-tech.myshopify.com/">Store</a>
          <a href="https://assets.berty.tech/">Assets</a>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.copyrightTxt}>
          <p>
            Berty™️ is a registered trademark © 2018-2022 Berty Technologies -
            All right reserved -{" "}
            <a target="BLANK" href="https://berty.tech/terms">
              Terms & Conditions
            </a>{" "}
            -{" "}
            <a target="BLANK" href="https://berty.tech/privacy-policy">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className={styles.follow}>
          <a target="BLANK" href="https://crpt.fyi/berty-discord">
            <img
              className={styles.logo}
              src="../img/discord_logo.svg"
              alt="Discord logo"
            />
          </a>
          <a target="BLANK" href="https://twitter.com/berty">
            <img
              className={styles.logo}
              src="../img/twitter_logo.svg"
              alt="Tweeter logo"
            />
          </a>
          <a target="BLANK" href="https://github.com/berty">
            <img
              className={styles.logo}
              src="../img/github_logo.svg"
              alt="Github logo"
            />
          </a>
          <a target="BLANK" href="https://medium.com/berty-tech">
            <img
              className={styles.logo}
              src="../img/unknown_logo.svg"
              alt="Unknown logo"
            />
          </a>
          <a target="BLANK" href="https://www.linkedin.com/company/berty">
            <img
              className={styles.logo}
              src="../img/linkedin_logo.svg"
              alt="Linkedin logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
