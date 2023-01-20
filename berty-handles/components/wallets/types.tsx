export interface KeplrEndpoints {
  chainId: string;
  chainName: string;
  rpc: string;
  rest: string;
  bip44: { coinType: number };
  bech32Config: bech32Config;
  currencies: currencies[];
  feeCurrencies: feeCurrencies[];
  stakeCurrency: stakeCurrency;
}

export interface bech32Config {
  bech32PrefixAccAddr: string;
  bech32PrefixAccPub: string;
  bech32PrefixValAddr: string;
  bech32PrefixValPub: string;
  bech32PrefixConsAddr: string;
  bech32PrefixConsPub: string;
}

export interface currencies {
  coinDenom: string;
  coinMinimalDenom: string;
  coinDecimals: number;
  coinGeckoId: string;
}

export interface feeCurrencies {
  coinDenom: string;
  coinMinimalDenom: string;
  coinDecimals: number;
  coinGeckoId: string;
  gasPriceStep: {
    low: number;
    average: number;
    high: number;
  };
}

export interface stakeCurrency {
  coinDenom: string;
  coinMinimalDenom: string;
  coinDecimals: number;
  coinGeckoId: string;
}
