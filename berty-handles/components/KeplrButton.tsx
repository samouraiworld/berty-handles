import React from "react";

import { useKeplr } from "../contexts/keplrContext";
import { fontStyle } from "../lib/style";

export interface KeplrButtonProps {
  className: string;
}

export const KeplrButton = ({ className }: KeplrButtonProps) => {
  const { connected, connect } = useKeplr();

  return (
    <div>
      {connected ? (
        <button className={className} disabled style={fontStyle()}>
          Connected
        </button>
      ) : (
        <button className={className} onClick={connect} style={fontStyle()}>
          Connect
        </button>
      )}
    </div>
  );
};
