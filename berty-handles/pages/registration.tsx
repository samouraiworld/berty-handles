import cn from "classnames";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { KeplrButton } from "../components/KeplrButton";
import { PrimaryButton } from "../components/PrimaryButton";
import { ProfileImage } from "../components/ProfileImage";
import { RegistrationForm } from "../components/RegistrationForm";
import { SecondaryButton } from "../components/SecondaryButton";
import { SuccessModal } from "../components/SuccessModal";
import { useKeplr } from "../contexts/keplrContext";
import { useCollectionStats } from "../hooks/useCollectionStats";
import { useNSInfo } from "../hooks/useNSInfo";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { nsContractAddress, TLD } from "../lib/config";
import { Metadata as NSMetadata } from "../lib/name-service/TeritoriNameService.types";
import { fontStyle } from "../lib/style";
import styles from "../styles/Registration.module.css";
import styles2 from "../styles/Registration2.module.css";

// you need to update values in css if you edit these
const breakPoint = 1000;
const mobileStepWidth = 177;

enum RegistrationStep {
  Search = 0,
  ConnectWallet = 1,
  ClaimAllocation = 2,
  Registration = 3,
}

type SearchState = "Available" | "Taken" | "Checking" | "None";

export default function Registration() {
  const router = useRouter();
  const { name: pageParamName } = router.query;

  const [formState, setFormState] = useState<NSMetadata>({});
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [step, setStep] = useState(RegistrationStep.Search);
  const { data: nsInfo, isSuccess } = useNSInfo(`${name}.${TLD}`);
  const { connected: walletConnected } = useKeplr();
  const { data: collectionStats } = useCollectionStats(
    `tori-${nsContractAddress}`
  );
  const windowDimensions = useWindowDimensions();

  let stepOffset = 0;
  if (windowDimensions.width < breakPoint) {
    stepOffset = (-step - 0.5) * mobileStepWidth + windowDimensions.width / 2;
  }

  // sync browser url with name
  useEffect(() => {
    const url = new URL(window.location.toString());
    if (name) {
      url.searchParams.set("name", name);
    } else {
      url.searchParams.delete("name");
    }
    window.history.replaceState(window.history.state, "", url);
  }, [name]);

  // sync name with browser url
  useEffect(() => {
    if (Array.isArray(pageParamName)) {
      return;
    }
    setName(pageParamName || "");
  }, [pageParamName]);

  const searchState: SearchState = name
    ? isSuccess
      ? nsInfo === null
        ? "Available"
        : "Taken"
      : "Checking"
    : "None";

  let canContinue = false;
  switch (step) {
    case RegistrationStep.Search: {
      canContinue = searchState === "Available";
      break;
    }
    case RegistrationStep.ConnectWallet: {
      canContinue = searchState === "Available" && walletConnected;
      break;
    }
    case RegistrationStep.ClaimAllocation: {
      canContinue = searchState === "Available";
      break;
    }
  }

  const handleContinue = useCallback(() => {
    setStep((step) => {
      if (step >= RegistrationStep.Registration) return step;
      return step + 1;
    });
  }, []);

  return (
    <>
      <Head>
        <title>Berty</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <Header />
        <div
          style={{
            minHeight: "calc(100vh - 90px)", // FIXME: find correct header size
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <section className={styles.registration}>
            <div className={styles.wrap}>
              {step === RegistrationStep.Registration &&
              windowDimensions.width >= breakPoint ? (
                <BackButton
                  onPress={() => setStep(RegistrationStep.ClaimAllocation)}
                />
              ) : (
                <div className={styles.backSpacer} />
              )}
              <div className={styles.stepsArray} style={fontStyle()}>
                <div className={styles.title}>
                  <h2>REGISTRATION STEPS</h2>
                </div>
                <div className={styles.array}>
                  <ul
                    className={styles.steps}
                    style={{
                      transform: `translateX(${stepOffset}px)`,
                      ...fontStyle(),
                    }}
                  >
                    <li
                      className={cn(
                        styles.retLi,
                        step > RegistrationStep.Search && styles.valid,
                        step === RegistrationStep.Search && styles.current
                      )}
                    >
                      <h2>1/ Search username</h2>
                      {step > RegistrationStep.Search && styles.valid && (
                        <img
                          src="../img/valid_icon.svg"
                          alt="Green completion icon"
                        />
                      )}
                    </li>
                    <li
                      className={cn(
                        styles.li1,
                        step > RegistrationStep.ConnectWallet && styles.valid,
                        step === RegistrationStep.ConnectWallet &&
                          styles.current
                      )}
                    >
                      <h2>2/ Connect Wallet</h2>
                      {step > RegistrationStep.ConnectWallet &&
                        styles.valid && (
                          <img
                            src="../img/valid_icon.svg"
                            alt="Green completion icon"
                          />
                        )}
                    </li>
                    <li
                      className={cn(
                        styles.li2,
                        step > RegistrationStep.ClaimAllocation && styles.valid,
                        step === RegistrationStep.ClaimAllocation &&
                          styles.current
                      )}
                    >
                      <h2>3/ Claim Allocation</h2>
                      {step > RegistrationStep.ClaimAllocation &&
                        styles.valid && (
                          <img
                            src="../img/valid_icon.svg"
                            alt="Green completion icon"
                          />
                        )}
                    </li>
                    <li
                      className={cn(
                        step === RegistrationStep.Registration && styles.current
                      )}
                    >
                      <h2>4/ Registration</h2>
                    </li>
                  </ul>
                </div>
              </div>

              {step === RegistrationStep.Registration && (
                <div className={styles.registrationPreview}>
                  <div className={styles2.profile}>
                    <div className={styles2.status}>
                      <p style={fontStyle()}>Available</p>
                    </div>
                    <ProfileImage url={formState.image} size={104} />
                    <p style={fontStyle()}>
                      {name}
                      <span style={{ color: "#C1C5E2" }}>.{TLD}</span>
                    </p>
                  </div>
                  <SecondaryButton style={{ width: "100%" }}>
                    Learn More
                  </SecondaryButton>
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: windowDimensions.width < breakPoint ? "100%" : undefined,
              }}
            >
              <div className={styles.backSpacer} />
              <div className={styles.connectArray}>
                {step === RegistrationStep.Registration &&
                  windowDimensions.width < breakPoint && (
                    <BackButton
                      onPress={() => setStep(RegistrationStep.ClaimAllocation)}
                    />
                  )}
                {step < RegistrationStep.Registration && (
                  <>
                    <SearchBar
                      onChange={setName}
                      value={name}
                      searchState={searchState}
                    />
                    <div className={styles.info}>
                      <img src="../img/info_icon.svg" alt="information icon" />
                      <div className={styles.textContainer} style={fontStyle()}>
                        <h2>What is a decentralized handle?</h2>
                        <p>
                          Your account will be registred on a public distributed
                          ledger, allowing to book it without any centralised
                          authority. To register your account, you’ll need a
                          wallet (Metamask or Keplr) and sign a transaction.
                        </p>
                        <p>
                          <span className={styles.txtOrange}>
                            {collectionStats?.owners || 0}
                          </span>{" "}
                          bertians have already booked their handle
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {step === RegistrationStep.ConnectWallet && (
                  <>
                    <div className={`${styles.walletBox} ${styles.reg1a}`}>
                      <img src="../img/metamask_logo.svg" alt="Metamask icon" />
                      <div className={styles.lineContainer}>
                        <h2>Metamask</h2>
                        <span
                          style={{
                            width: 108,
                            marginRight: 8,
                            textAlign: "center",
                            ...fontStyle(),
                          }}
                        >
                          Coming Soon
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.walletBox} ${styles.reg1b}`}>
                      <img src="../img/kepler_logo.svg" alt="keplr icon" />
                      <div className={styles.lineContainer} style={fontStyle()}>
                        <h2>Keplr Wallet</h2>
                        <KeplrButton
                          className={`${styles.connectBtn} ${styles.hov} ${styles.button}`}
                        />
                      </div>
                    </div>
                  </>
                )}
                {step === RegistrationStep.ClaimAllocation && (
                  <>
                    <div
                      className={`${styles.walletBox} ${styles.disabled} ${styles.reg2a}`}
                    >
                      <img
                        src="../img/berty_mini_logo.svg"
                        alt="minparrot icon"
                      />
                      <div className={styles.lineContainer}>
                        <h2 style={fontStyle()}>
                          Claim Berty Supporter Allocation (FreeMint)
                        </h2>
                      </div>
                    </div>
                    <div
                      className={`${styles.walletBox} ${styles.disabled} ${styles.reg2b}`}
                    >
                      <img src="../img/kepler_logo.svg" alt="coinbase icon" />
                      <div className={styles.lineContainer}>
                        <h2 style={fontStyle()}>
                          Support the NGO by paying your handle
                        </h2>
                      </div>
                    </div>
                  </>
                )}
                {step === RegistrationStep.Registration && (
                  <RegistrationForm
                    name={name}
                    state={formState}
                    onChangeState={setFormState}
                    onSuccess={() => {
                      setShowModal(true);
                    }}
                  />
                )}
                {step < RegistrationStep.ClaimAllocation && (
                  <div style={{ textAlign: "center", marginTop: 8 }}>
                    <PrimaryButton
                      disabled={!canContinue}
                      onClick={handleContinue}
                    >
                      Continue
                    </PrimaryButton>
                  </div>
                )}
                {step === RegistrationStep.ClaimAllocation && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 8,
                    }}
                  >
                    <SecondaryButton>Learn More</SecondaryButton>
                    <div style={{ width: 25 }} />
                    <PrimaryButton
                      disabled={!canContinue}
                      onClick={handleContinue}
                    >
                      Continue
                    </PrimaryButton>
                  </div>
                )}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
      <SuccessModal
        name={name}
        show={showModal}
        imageURL={formState.image}
        onClose={() => {
          setStep(RegistrationStep.ClaimAllocation);
          setShowModal(false);
          setName("");
        }}
      />
    </>
  );
}

const SearchBar: FC<{
  onChange: (name: string) => void;
  value: string;
  searchState: SearchState;
}> = ({ onChange, value, searchState }) => {
  let availabilityButtonStyle;
  switch (searchState) {
    case "Available": {
      availabilityButtonStyle = styles.availableBtn;
      break;
    }
    case "Taken": {
      availabilityButtonStyle = styles.takenBtn;
      break;
    }
    case "Checking": {
      availabilityButtonStyle = styles.checkingBtn;
      break;
    }
  }
  return (
    <div className={styles.searchBar}>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          marginRight: 12,
          ...fontStyle(),
        }}
      >
        <input
          type="text"
          value={value}
          size={1}
          onChange={(e) => onChange(e.target.value)}
          autoCapitalize="off"
          style={{
            background: "none",
            border: "none",
            outline: "none",
            flexGrow: 1,
            ...fontStyle(),
          }}
        />
        .{TLD}
      </div>
      <div>
        {searchState !== "None" && (
          <div className={availabilityButtonStyle} style={fontStyle()}>
            {searchState}
          </div>
        )}
      </div>
    </div>
  );
};

const BackButton: FC<{ onPress: () => void }> = ({ onPress }) => (
  <div
    className={styles2.back}
    onClick={onPress}
    style={{
      height: 32,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    }}
  >
    <img src="../img/arrow.png" alt="Back arrow icon" />
    <p style={fontStyle()}>Back</p>
  </div>
);
