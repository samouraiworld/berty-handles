import Head from 'next/head';
import styles from '../styles/Registration.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import KeplrButton from '../components/wallets/Keplr/keplr';

export default function Registration() {
  return (
    <>
      <Head>
        <title>Berty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Body}>
        <Header />

        <section className={styles.registration}>
          <div className={styles.wrap}>
            <div className={styles.stepsArray}>
              <div className={styles.title}>
                <h2>REGISTRATION STEPS</h2>
              </div>
              <div className={styles.array}>
                <ul className={styles.steps}>
                  <li className={styles.valid}>
                    <a href="/" className={styles.retLi}>
                      <h2>1/ Search username</h2>
                      <img src="../img/valid_icon.svg" alt="Green completion icon" />
                    </a>
                  </li>
                  <li className={`${styles.current} ${styles.li1}`}>
                    <h2>2/ Connect Wallet</h2>
                    <img src="../img/valid_icon.svg" alt="Green completion icon" />
                  </li>
                  <li className={styles.li2}>
                    <h2>3/ Claim Allocation</h2>
                  </li>
                  <li>
                    <h2>4/ Registration</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.connectArray}>
            <div className={styles.connect}>
              <h2>brucelee.berty</h2>
              <div className={styles.availableBtn}>Available</div>
            </div>
            <div className={styles.info}>
              <img src="../img/info_icon.svg" alt="information icon" />
              <div className={styles.textContainer}>
                <h2>What is a decentralized handle?</h2>
                <p>
                  Your account will be registred on a public distributed ledger, allowing to book it
                  without any centralised authority. To register your account, you’ll need a wallet
                  (Metamask or Keplr) and sign a transaction.
                </p>
                <p>
                  <span className={styles.txtOrange}>4503 / 10 000</span> bertians have already
                  booked their handle
                </p>
              </div>
            </div>
            <div className={`${styles.connect2} ${styles.reg1a}`}>
              <img src="../img/metamask_logo.svg" alt="Metamask icon" />
              <div className={styles.lineContainer}>
                <h2>Metamask</h2>
                <button className={`${styles.connectBtn} ${styles.hov} ${styles.button}`}>
                  Connect
                </button>
              </div>
            </div>
            <div className={`${styles.connect2} ${styles.reg1b}`}>
              <img src="../img/kepler_logo.svg" alt="keplr icon" />
              <div className={styles.lineContainer}>
                <h2>Keplr Wallet</h2>
                <KeplrButton className={`${styles.connectBtn} ${styles.hov} ${styles.button}`} />
              </div>
            </div>
            <div className={`${styles.connect2} ${styles.disabled} ${styles.reg2a}`}>
              <img src="../img/berty_mini_logo.svg" alt="minparrot icon" />
              <div className={styles.lineContainer}>
                <h2>Claim Berty Supporter Allocation (FreeMint)</h2>
              </div>
            </div>
            <div className={`${styles.connect2} ${styles.disabled} ${styles.reg2b}`}>
              <img src="../img/kepler_logo.svg" alt="coinbase icon" />
              <div className={styles.lineContainer}>
                <h2>Support the NGO by paying your handle</h2>
              </div>
            </div>
            <div className={`${styles.continue} ${styles.reg1c}`}>
              <button className={`${styles.continueBtn} ${styles.hov} ${styles.button}`}>
                Continue
              </button>
            </div>
            <div className={`${styles.connect2} ${styles.disabled} ${styles.reg2c}`}>
              <button className={`${styles.continueBtn} ${styles.hov} ${styles.button}`}>
                Learn More
              </button>
              <a
                className={`${styles.btnLink} ${styles.revhov} ${styles.button}`}
                href="/registration2">
                <button className={styles.continueBtn}>Continue</button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
