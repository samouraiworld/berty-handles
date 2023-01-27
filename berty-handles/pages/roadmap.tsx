import cn from "classnames";
import Head from "next/head";
import { FC } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/RoadMap.module.css";

export default function RoadMap() {
  const windowDimensions = useWindowDimensions();

  // this defeats SSR purpose and could be optimized by using css only
  if (windowDimensions.width === 0) {
    return null;
  }

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

        <section className={styles.content}>
          <div className={styles.contentContainer}>
            <div className={styles.title}>
              <h1>ROADMAP</h1>
            </div>
            {windowDimensions.width < 1300 ? (
              <MobileRoadmap />
            ) : (
              <DesktopRoadmap />
            )}
            <img
              src="../img/double_arrow.svg"
              className={styles.doubleArrow}
              alt="double arrow bottom oriented"
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

const DesktopRoadmap: FC = () => {
  return (
    <>
      {steps.map((datum, index) => {
        const isOdd = index % 2 === 1;
        const isLast = index === steps.length - 1;
        const gradient = isOdd
          ? `linear-gradient(90deg, ${datum.gradientEndColor} 0%, ${datum.color} 100%)`
          : `linear-gradient(90deg, ${datum.color} 0%, ${datum.gradientEndColor} 100%)`;
        return (
          <div
            key={index}
            className={cn(styles.quarterContainer, isOdd && styles.qrev)}
            style={isLast ? { marginBottom: 16 } : undefined}
          >
            <div className={styles.leftContainer}>
              <h2 className={styles.cardTitle} style={{ color: datum.color }}>
                {datum.title}
              </h2>
              <div className={styles.cardContent}>{datum.content}</div>
            </div>
            <div className={styles.greyLine} />
            <div className={styles.midContainer}>
              <div
                className={styles.gradient}
                style={{ background: gradient }}
              />
              <div
                className={cn(
                  styles.line,
                  isOdd ? styles.lineRight : styles.lineLeft
                )}
                style={{ background: datum.color }}
              />
              <p style={{ color: datum.color }}>{datum.timeFrame}</p>
              {!isLast && <div className={styles.separator} />}
            </div>
            <div className={styles.rightContainer}>
              {!!datum.imageSource && (
                <img src={datum.imageSource} alt={datum.imageAlt} />
              )}
              {!!datum.imageSubtitle && <p>{datum.imageSubtitle}</p>}
            </div>
          </div>
        );
      })}
    </>
  );
};

const MobileRoadmap: FC = () => {
  return (
    <>
      {steps.map((datum, index) => {
        const isOdd = index % 2 === 1;
        const isLast = index === steps.length - 1;
        const gradient = isOdd
          ? `linear-gradient(0deg, ${datum.gradientEndColor} 0%, ${datum.color} 100%)`
          : `linear-gradient(0deg, ${datum.color} 0%, ${datum.gradientEndColor} 100%)`;
        return (
          <div key={index}>
            <div className={styles.timeFrameContainer}>
              <div
                className={styles.gradient}
                style={{ background: gradient }}
              />
              <div
                className={styles.line}
                style={{ background: datum.color }}
              />
              <p style={{ color: datum.color }}>{datum.timeFrame}</p>
              <div className={styles.separator} />
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle} style={{ color: datum.color }}>
                {datum.title}
              </h2>
              <div className={styles.cardContent}>{datum.content}</div>
              {!isLast && <div className={styles.separator} />}
            </div>
          </div>
        );
      })}
    </>
  );
};

interface RoadmapStep {
  title: string;
  timeFrame: string;
  color: string;
  gradientEndColor: string;
  content: React.ReactElement;
  imageSource?: string;
  imageSubtitle?: string;
  imageAlt?: string;
}

const steps: RoadmapStep[] = [
  {
    title: "Wesh Network",
    timeFrame: "H2 2019",
    color: "#AFF4C6",
    gradientEndColor: "rgba(175, 244, 198, 0)",
    imageSource: "/img/Roadmap1.svg",
    imageSubtitle: "Open-source and modular source code",
    imageAlt: "Open source and modular representation",
    content: (
      <>
        <div className={styles.textFrame}>
          <p>
            Creation of Wesh Network - we developed a new open-source P2P
            communication protocol built on top of IPFS.
          </p>
        </div>
        <div className={styles.textContainer}>
          <p>/ decentralised accounts;</p>
        </div>
        <div className={styles.textContainer}>
          <p>/ groups interactions:</p>
          <br />
          <div className={styles.greyText}>
            <p>
              - multiple peers exchange keys to verify their available
              identities
            </p>
            <br />
            <p>- real-time exchange of message, minimal meta-data</p>
            <br />
            <p>- keeping history accessible to group members</p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Ghost Launch Berty Messenger",
    timeFrame: "Q4 2021",
    color: "rgba(228, 204, 255, 1)",
    gradientEndColor: "rgba(228, 204, 255, 0)",
    content: (
      <>
        <div className={styles.textFrame}>
          <p>
            Berty Messenger, the 1st application of that uses the building
            blocks of Wesh Network launches in App Store and Playstore:
          </p>
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
          <p>
            - Offline communication with close peers via BLE and WiFI (beta)
          </p>
        </div>
      </>
    ),
  },
  {
    title: "BETA - Stability Improvements",
    timeFrame: "TODAY",
    color: "rgba(255, 199, 194, 1)",
    gradientEndColor: "rgba(255, 199, 194, 0)",
    imageSource: "/img/Roadmap2.svg",
    imageSubtitle: "E2E Encryption",
    imageAlt: "Open source and modular representation",
    content: (
      <div className={styles.textFrame}>
        <p>
          We are currently working on stabilizing and increasing the performance
          of the app.
          <br />
          <br />
          New features like “see the P2P” are also in development.
        </p>
      </div>
    ),
  },
  {
    title: "Launch of Berty Messenger v1.0",
    timeFrame: "Q2 2023",
    color: "rgba(167, 99, 255, 1)",
    gradientEndColor: "rgba(167, 99, 255, 0)",
    imageSource: "/img/Roadmap3.svg",
    imageSubtitle: "Unstoppable P2P Communication",
    imageAlt: "Distributed nodes",
    content: (
      <>
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
      </>
    ),
  },
  {
    title: "New Features",
    timeFrame: "H2 2023 & Beyond",
    color: "rgba(189, 227, 255, 1)",
    gradientEndColor: "rgba(189, 227, 255, 0)",
    content: (
      <>
        <div className={`${styles.textContainer} ${styles.greyText}`}>
          <p>- Enhanced reliability via Replication Nodes</p>
        </div>
        <div className={`${styles.textContainer} ${styles.greyText}`}>
          <p>
            - Enhanced Privacy - complete control over your network footprint
          </p>
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
      </>
    ),
  },
];
