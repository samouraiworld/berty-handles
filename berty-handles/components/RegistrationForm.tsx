import { Window as KeplrWindow } from "@keplr-wallet/types";
import {
  Decimal,
  ExecuteResult,
  GasPrice,
  SigningCosmWasmClient,
} from "cosmwasm";
import { ComponentProps, FC, useCallback } from "react";

import { useNSPrice } from "../hooks/useNSPrice";
import { nsContractAddress, rpcEndpoint, TLD } from "../lib/config";
import { teritoriTestChain } from "../lib/keplrChains";
import { TeritoriNameServiceClient } from "../lib/name-service/TeritoriNameService.client";
import { Metadata as NSMetadata } from "../lib/name-service/TeritoriNameService.types";
import { fontStyle } from "../lib/style";
import styles from "../styles/Registration2.module.css";
import { PrimaryButton } from "./PrimaryButton";

// TODO: extract styles from Registration module

export const RegistrationForm: FC<{
  name: string;
  onSuccess: (result: ExecuteResult) => void;
  state: NSMetadata;
  onChangeState: (state: NSMetadata) => void;
}> = ({ name, onSuccess, state, onChangeState }) => {
  const { data: price } = useNSPrice(`${name}.${TLD}`);

  const register = useCallback(async () => {
    const keplr = (window as KeplrWindow).keplr;

    if (!keplr) {
      console.warn("no keplr");
      return;
    }

    if (!price) {
      console.warn("no price");
      return;
    }

    const signer = await keplr.getOfflineSignerAuto(teritoriTestChain.chainId);

    const client = await SigningCosmWasmClient.connectWithSigner(
      rpcEndpoint,
      signer,
      { gasPrice: new GasPrice(Decimal.fromUserInput("0", 6), "utori") }
    );

    const accounts = await signer.getAccounts();

    if (accounts.length < 1) {
      console.warn("no keplr accounts");
      return;
    }

    const sender = accounts[0].address;

    const contractClient = new TeritoriNameServiceClient(
      client,
      sender,
      nsContractAddress
    );

    const result = await contractClient.mint(
      {
        owner: sender,
        tokenId: `${name}.${TLD}`,
        extension: state,
      },
      "auto",
      undefined,
      [{ denom: "utori", amount: price }]
    );

    onSuccess(result);
  }, [name, price, state, onSuccess]);

  const inputProps = (name: keyof NSMetadata): ComponentProps<"input"> => {
    return {
      className: styles.formInput,
      value: String(state[name] || ""),
      onChange: (evt) => onChangeState({ ...state, [name]: evt.target.value }),
      style: fontStyle(),
    };
  };

  return (
    <div className={styles.registrationForm}>
      <div className={styles.mint}>
        <img src="../img/coin.svg" />
        <p style={fontStyle()}>
          The mint cost for this token is{" "}
          {Decimal.fromAtomics(price || "0", 6).toString()} TORI
        </p>
      </div>
      <ul>
        <li>
          <p style={fontStyle()}>Name (optional)</p>
          <input
            type="text"
            placeholder="Type Name here"
            {...inputProps("public_name")}
          />
        </li>
        <li>
          <p style={fontStyle()}>Bio (optional)</p>
          <input
            type="text"
            placeholder="Type Bio here"
            {...inputProps("public_bio")}
          />
        </li>
        <li>
          <p style={fontStyle()}>Image URL (optional)</p>
          <input
            type="text"
            placeholder="Insert image URL here"
            {...inputProps("image")}
          />
        </li>
        <li>
          <p style={fontStyle()}>User Header Profile (optional)</p>
          <input
            type="text"
            placeholder="Insert image URL here"
            {...inputProps("public_profile_header")}
          />
        </li>
        <li>
          <p style={fontStyle()}>Email (optional)</p>
          <input
            type="text"
            placeholder="Type Email here"
            {...inputProps("email")}
          />
        </li>
        <li>
          <p style={fontStyle()}>Website (optional)</p>
          <input
            type="text"
            placeholder="Type/insert link here"
            {...inputProps("external_url")}
          />
        </li>
        <li>
          <p style={fontStyle()}>Twitter (optional)</p>
          <input
            type="text"
            placeholder="Link to Twitter"
            {...inputProps("twitter_id")}
          />
        </li>
        <li>
          <p style={fontStyle()}>Keybase.io (optional)</p>
          <input
            type="text"
            placeholder="Type/insert link here"
            {...inputProps("keybase_id")}
          />
        </li>
        <li>
          <p style={fontStyle()}>Validator operator address (optional)</p>
          <input
            type="text"
            placeholder="Type/insert link here"
            {...inputProps("validator_operator_address")}
          />
        </li>
      </ul>
      <div className={styles.continue}>
        <PrimaryButton onClick={register}>Register your username</PrimaryButton>
      </div>
    </div>
  );
};
