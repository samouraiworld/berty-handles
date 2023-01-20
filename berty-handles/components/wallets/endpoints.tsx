import { KeplrEndpoints } from './types';

export const teritoriTestEndpoints: KeplrEndpoints = {
  chainId: 'teritori-testnet-v3',
  chainName: 'Teritori Testnet',
  rpc: 'https://rpc.testnet.teritori.com',
  rest: 'https://rest.testnet.teritori.com',
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: 'tori',
    bech32PrefixAccPub: 'tori' + 'pub',
    bech32PrefixValAddr: 'tori' + 'valoper',
    bech32PrefixValPub: 'tori' + 'valoperpub',
    bech32PrefixConsAddr: 'tori' + 'valcons',
    bech32PrefixConsPub: 'tori' + 'valconspub',
  },
  currencies: [
    {
      coinDenom: 'TORI',
      coinMinimalDenom: 'utori',
      coinDecimals: 6,
      coinGeckoId: 'teritori',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'TORI',
      coinMinimalDenom: 'utori',
      coinDecimals: 6,
      coinGeckoId: 'teritori',
      gasPriceStep: {
        low: 0.0,
        average: 0.025,
        high: 0.04,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: 'TORI',
    coinMinimalDenom: 'utori',
    coinDecimals: 6,
    coinGeckoId: 'teritori',
  },
};

export const teritoriEndpoints: KeplrEndpoints = {
  chainId: 'teritori-1',
  chainName: 'Teritori',
  rpc: 'https://rpc.mainnet.teritori.com',
  rest: 'https://rest.mainnet.teritori.com',
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: 'tori',
    bech32PrefixAccPub: 'tori' + 'pub',
    bech32PrefixValAddr: 'tori' + 'valoper',
    bech32PrefixValPub: 'tori' + 'valoperpub',
    bech32PrefixConsAddr: 'tori' + 'valcons',
    bech32PrefixConsPub: 'tori' + 'valconspub',
  },
  currencies: [
    {
      coinDenom: 'TORI',
      coinMinimalDenom: 'utori',
      coinDecimals: 6,
      coinGeckoId: 'teritori',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'TORI',
      coinMinimalDenom: 'utori',
      coinDecimals: 6,
      coinGeckoId: 'teritori',
      gasPriceStep: {
        low: 0.0,
        average: 0.025,
        high: 0.04,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: 'TORI',
    coinMinimalDenom: 'utori',
    coinDecimals: 6,
    coinGeckoId: 'teritori',
  },
};
