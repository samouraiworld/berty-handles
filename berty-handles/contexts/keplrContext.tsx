import { Window as KeplrWindow } from "@keplr-wallet/types";
import React, {
  createContext,
  FC,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { teritoriTestChain } from "../lib/keplrChains";

interface KeplrContextValue {
  connected: boolean;
  connect: () => Promise<void>;
}

const initialValue: KeplrContextValue = {
  connected: false,
  connect: async () => {},
};

const KeplrContext = createContext(initialValue);

export const KeplrContextProvider: FC<{
  children: ReactElement<any, any> | null;
}> = ({ children }) => {
  const [connected, setConnected] = useState(initialValue.connected);

  const connect = useCallback(async () => {
    setConnected(false);
    console.log("connecting keplr");
    const keplr = (window as KeplrWindow).keplr;
    if (!keplr) {
      window.open(
        "https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap",
        "_blank"
      );
      return;
    }
    try {
      // SuggestChain
      await keplr.experimentalSuggestChain(teritoriTestChain);
      // Enable
      try {
        await keplr.enable(teritoriTestChain.chainId);
        setConnected(true);
        return;
      } catch (err) {
        console.log(`Error enabling Keplr: ${err}`);
      }
    } catch {
      alert("Failed to suggest the chain");
    }
  }, []);

  const value = useMemo(() => {
    return {
      connected,
      connect,
    };
  }, [connected, connect]);

  return (
    <KeplrContext.Provider value={value}>{children}</KeplrContext.Provider>
  );
};

export const useKeplr = () => {
  return useContext(KeplrContext);
};
