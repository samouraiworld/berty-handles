import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Body}>
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
      <section className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.left}>
          <img src="../img/illustration.svg" alt="Illustration of an egg"/>
          </div>
          <div className={styles.right}>
        <div className={styles.text1}>
          <h1>Berty, the future-proof <span className={styles.txtOrange}>web3</span> messenger is coming soon....</h1>
        </div>

        </div>
        </div>
        <div className={styles.bottomContainer}>
      <div className={styles.card}>
        <div className={styles.gradient}>
        </div>
        <div className={styles.textContainer}>
          <h2>Subscribe to the Newsletter</h2>
          <p>Stay up to date with the news from our team and be the first to find out when Berty Messenger will be
            ready!</p>
        </div>
        <div className={styles.search}>
          <form
            action="https://tech.us20.list-manage.com/subscribe/post?u=5ca3993c7f0b8f646dcda714b&amp;id=4d7828715b&amp;f_id=002d95e5f0"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
            <input type="text" name="EMAIL" placeholder="Enter your email here" id="mce-EMAIL" required />
            <button className={styles.button} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Sign-up</button>
          </form>
        </div>
        <div className={styles.line}>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.gradient}>
        </div>
        <div className={styles.advanced}>
          <p>Advanced</p>
        </div>
        <div className={styles.textContainer}>
          <h2>Reserve your decentralized identifier</h2>
          <p>(i) This public username is an ENTIRELY OPTIONAL feature that will allow people to find you via
            onchain-handle.<br/><span>4503</span> bertians have already booked thier handle</p>
        </div>
        <div className={styles.search}>
          <form action="./Pages/registration.html" method="get">
            <input type="text" placeholder="Verify availablity..." />
            <button className={styles.button} >Connect Wallet</button>
          </form>
              </div>
            <div className={styles.line}>
           </div>
         </div>
        </div>
      </section>
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
      </div>
    </>
  )
}