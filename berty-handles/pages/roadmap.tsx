import Head from 'next/head'
import styles from '../styles/RoadMap.module.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default function RoadMap() {
  return (
    <>
      <Head>
        <title>Berty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Body}>


    <Header/>

    <section className={styles.content}>
        <div className={styles.contentContainer}>
            <div className={styles.title}>
                <h1>ROADMAP</h1>
            </div>
            <div className={styles.quarterContainer}>
                <div className={styles.leftContainer}>
                    <h2 className={styles.greentext}>Wesh Network</h2>
                    <div className={styles.bottomContainer}>
                        <div className={styles.textFrame}>
                            <p>Creation of Wesh Network - we developed a new open-source P2P communication protocol
                                built on
                                top of IPFS. </p>
                        </div>
                        <div className={styles.textContainer}>
                            <p>/ decentralised accounts;</p>
                        </div>
                        <div className={styles.textContainer}>
                            <p>/ groups interactions:</p><br/>
                            <div className={styles.greyText}>
                                <p>- multiple peers exchange keys to verify their available identities</p>
                                <br/>
                                <p>- real-time exchange of message, minimal meta-data</p><br/>
                                <p>- keeping history accessible to group members</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.greyLine}></div>
                <div className={styles.midContainer}>
                    <div className={`${styles.gradient} ${styles.greengrad}`}></div>
                    <div className={`${styles.line} ${styles.greenline}`}></div>
                    <p className={styles.greentext}>H2 2019</p>
                    <div className={styles.separator}></div>
                </div>
                <div className={styles.rightContainer}>
                    <img src="../img/Roadmap1.svg" alt="Open source and modular representation"/>
                    <p>Open-source and modular source code</p>
                </div>
            </div>

            <div className={`${styles.quarterContainer} ${styles.qrev}`}>
                <div className={styles.leftContainer}>
                    <h2 className={styles.pinktext}>Ghost Launch Berty
                        Messenger</h2>
                    <div className={styles.bottomContainer}>
                        <div className={styles.textFrame}>
                            <p>Berty Messenger, the 1st application of that uses the building blocks of Wesh Network
                                launches in App Store and Playstore:</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- P2P text chat on IPFS</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- Unique Anonymous Account</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- E2E encryption</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- Offline communication with close peers via BLE and WiFI (beta)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.greyLine}></div>
                <div className={styles.midContainer}>
                    <div className={`${styles.gradient} ${styles.pinkgrad}`}></div>
                    <div className={`${styles.line} ${styles.pinkline}`}></div>
                    <p className={styles.pinktext}>Q4 2021</p>
                    <div className={styles.separator}></div>
                </div>
                <div className={`${styles.rightContainer} ${styles.disabled}`}>
                    <img src="../img/Roadmap2.svg" alt="Open source and modular representation"/>
                    <p>Open-source and modular source code</p>
                </div>
            </div>

            <div className={styles.quarterContainer}>
                <div className={styles.leftContainer}>
                    <h2 className={styles.orangetext}>BETA - Stability
                        Improvements</h2>
                    <div className={styles.bottomContainer}>
                        <div className={styles.textFrame}>
                            <p>We are currently working on stabilizing and increasing the performance of the app.
                                <br/><br/>
                                New features like “see the P2P” are also in development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.greyLine}></div>
                <div className={styles.midContainer}>
                    <div className={`${styles.gradient} ${styles.orangegrad}`}></div>
                    <div className={`${styles.line} ${styles.orangeline}`}></div>
                    <p className={styles.orangetext}>TODAY</p>
                    <div className={styles.separator}></div>
                </div>
                <div className={styles.rightContainer}>
                    <img src="../img/Roadmap2.svg" alt="Open source and modular representation"/>
                    <p>E2E Encryption</p>
                </div>
            </div>

            <div className={`${styles.quarterContainer} ${styles.qrev2}`}>
                <div className={styles.leftContainer}>
                    <h2 className={styles.purpletext}>Launch of Berty<br/>
                        Messenger v1.0</h2>
                    <div className={styles.bottomContainer}>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- P2P Communication</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- Anonymous or Public Account</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- Offline P2P communication via BLE and WiFI</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- E2E Encryption</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- “See” the P2P</p>
                        </div>
                    </div>
                </div>
                <div className={styles.greyLine}></div>
                <div className={styles.midContainer}>
                    <div className={`${styles.gradient} ${styles.purplegrad}`}></div>
                    <div className={`${styles.line} ${styles.purpleline}`}></div>
                    <p className={styles.purpletext}>Q2 2023</p>
                    <div className={styles.separator}></div>
                </div>
                <div className={`${styles.rightContainer} ${styles.rrev}`}>
                    <img src="../img/Roadmap3.svg" alt="Open source and modular representation"/>
                    <p>Unstoppable P2P Communication</p>
                </div>
            </div>

            <div className={styles.quarterContainer}>
                <div className={styles.leftContainer}>
                    <h2 className={styles.bluetext}>New Features</h2>
                    <div className={styles.bottomContainer}>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- Enhanced reliability via Replication Nodes</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- Enhanced Privacy - complete control over your network footprint</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- Social Contacts Discovery</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- Additional communication options (images, voice, etc.)</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- Extend R&D in offline comm via BLE and WiFI and beyond</p>
                        </div>
                        <div className={`${styles.textContainer} ${styles.greyText}`}>
                            <p>- New hardware & telco infrastructure and 3rd party collabs.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.greyLine}></div>
                <div className={styles.midContainer}>
                    <div className={`${styles.gradient} ${styles.bluegrad}`}></div>
                    <div className={`${styles.line} ${styles.blueline}`}></div>
                    <p className={styles.bluetext}>H2 2023 & Beyond</p>
                </div>
                <div className={`${styles.rightContainer} ${styles.disabled}`}>
                    <img src="../img/Roadmap3.svg" alt="Open source and modular representation"/>
                    <p>E2E Encryption</p>
                </div>
            </div>

            <img src="../img/double_arrow.svg" className={styles.doubleArrow} alt="double arrow bottom oriented"/>
        </div>
    </section>

    <Footer/>
    
      </div>
    </>
  )
}
