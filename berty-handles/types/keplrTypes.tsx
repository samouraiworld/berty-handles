import { AminoSignResponse, BroadcastMode, DirectSignResponse, StdSignature, StdSignDoc, Window as KeplrWindow } from "@keplr-wallet/types";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {
    enable(chainIds: string | string[]): Promise<void>
   
    getKey(chainId: string): Promise<{
      // Name of the selected key store.
      name: string;
      algo: string;
      pubKey: Uint8Array;
      address: Uint8Array;
      bech32Address: string;
  }>
  signAmino(chainId: string, signer: string, signDoc: StdSignDoc): Promise<AminoSignResponse>
  
  signDirect(chainId:string, signer:string, signDoc: {
    /** SignDoc bodyBytes */
    bodyBytes?: Uint8Array | null;

    /** SignDoc authInfoBytes */
    authInfoBytes?: Uint8Array | null;

    /** SignDoc chainId */
    chainId?: string | null;

    /** SignDoc accountNumber */
    accountNumber?: Long | null;
  }): Promise<DirectSignResponse>
  
  sendTx(
    chainId: string,
    tx: Uint8Array,
    mode: BroadcastMode
): Promise<Uint8Array>;

signArbitrary(
  chainId: string,
  signer: string,
  data: string | Uint8Array
): Promise<StdSignature>;
verifyArbitrary(
  chainId: string,
  signer: string,
  data: string | Uint8Array,
  signature: StdSignature
): Promise<boolean>;

}
  
export interface KeplrIntereactionOptions {
  readonly sign?: KeplrSignOptions;
}

export interface KeplrSignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;
}
}