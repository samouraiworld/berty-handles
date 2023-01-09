import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Window as KeplrWindow } from "@keplr-wallet/types";


// Keplr
declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {
    enable ( chainIds : string | string [ ] ) : Promise < void >
  
    getKey(chainId: string): Promise<{
      // Name of the selected key store.
      name: string;
      algo: string;
      pubKey: Uint8Array;
      address: Uint8Array;
      bech32Address: string;
  }>

  signDirect(chainId:string, signer:string, signDoc: {
    /** SignDoc bodyBytes */
    bodyBytes?: Uint8Array | null;

    /** SignDoc authInfoBytes */
    authInfoBytes?: Uint8Array | null;

    /** SignDoc chainId */
    chainId?: string | null;

    /** SignDoc accountNumber */
    accountNumber?: Long | null;
  }): Promise<any>
}

}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
