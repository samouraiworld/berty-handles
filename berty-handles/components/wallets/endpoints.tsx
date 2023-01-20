import { KeplrEndpoints } from "./types"


// ENDPOINTS EN ATTENDANT ENDPOINTS SPÉCIFIQUES A BERTY

export const teritoriTestEndpoints: KeplrEndpoints = {
        chainId: "teritori-testnet-v3",
        chainName: "Teritori Testnet",
        rpc: "https://rpc.testnet.teritori.com",
        rest: "https://rest.testnet.teritori.com",
        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: "tori",
            bech32PrefixAccPub: "tori" + "pub",
            bech32PrefixValAddr: "tori" + "valoper",
            bech32PrefixValPub: "tori" + "valoperpub",
            bech32PrefixConsAddr: "tori" + "valcons",
            bech32PrefixConsPub: "tori" + "valconspub",
        },
        currencies: [ 
            { 
                coinDenom: "TORI", 
                coinMinimalDenom: "utori", 
                coinDecimals: 6, 
                coinGeckoId: "teritori", 
            }, 
        ],
        feeCurrencies: [
            {
                coinDenom: "TORI",
                coinMinimalDenom: "utori",
                coinDecimals: 6,
                coinGeckoId: "teritori",
                gasPriceStep: {
                    low: 0.00,
                    average: 0.025,
                    high: 0.04,
                },
            },
        ],
        stakeCurrency: {
            coinDenom: "TORI",
            coinMinimalDenom: "utori",
            coinDecimals: 6,
            coinGeckoId: "teritori",
        }
}


export const teritoriEndpoints: KeplrEndpoints = {
        chainId: "teritori-1",
        chainName: "Teritori",
        rpc: "https://rpc.mainnet.teritori.com",
        rest: "https://rest.mainnet.teritori.com",
        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: "tori",
            bech32PrefixAccPub: "tori" + "pub",
            bech32PrefixValAddr: "tori" + "valoper",
            bech32PrefixValPub: "tori" + "valoperpub",
            bech32PrefixConsAddr: "tori" + "valcons",
            bech32PrefixConsPub: "tori" + "valconspub",
        },
        currencies: [ 
            { 
                coinDenom: "TORI", 
                coinMinimalDenom: "utori", 
                coinDecimals: 6, 
                coinGeckoId: "teritori", 
            }, 
        ],
        feeCurrencies: [
            {
                coinDenom: "TORI",
                coinMinimalDenom: "utori",
                coinDecimals: 6,
                coinGeckoId: "teritori",
                gasPriceStep: {
                    low: 0.00,
                    average: 0.025,
                    high: 0.04,
                },
            },
        ],
        stakeCurrency: {
            coinDenom: "TORI",
            coinMinimalDenom: "utori",
            coinDecimals: 6,
            coinGeckoId: "teritori",
        }
}


export const ethereumEndpoints: KeplrEndpoints = {
    chainId: "1",
    chainName: "Ethereum",
    rpc: "https://ethereum.publicnode.com",
    rest: "https://ethereum.publicnode.com",
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "eth",
        bech32PrefixAccPub: "eth" + "pub",
        bech32PrefixValAddr: "eth" + "valoper",
        bech32PrefixValPub: "eth" + "valoperpub",
        bech32PrefixConsAddr: "eth" + "valcons",
        bech32PrefixConsPub: "eth" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "ETH", 
            coinMinimalDenom: "0x0000000000000000000000000000000000000000", 
            coinDecimals: 18, 
            coinGeckoId: "ethereum", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "ETH",
            coinMinimalDenom: "0x0000000000000000000000000000000000000000",
            coinDecimals: 18,
            coinGeckoId: "ethereum",
            gasPriceStep: {
                low: 0.00,
                average: 0.025,
                high: 0.04,
            },
        },
    ],
    stakeCurrency: {
        coinDenom: "ETH",
        coinMinimalDenom: "0x0000000000000000000000000000000000000000",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
    }
}


export const ethereumGoerli: KeplrEndpoints = {
    chainId: "5",
    chainName: "Ethereum Goerli",
    rpc: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    rest: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "eth",
        bech32PrefixAccPub: "eth" + "pub",
        bech32PrefixValAddr: "eth" + "valoper",
        bech32PrefixValPub: "eth" + "valoperpub",
        bech32PrefixConsAddr: "eth" + "valcons",
        bech32PrefixConsPub: "eth" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "ETH", 
            coinMinimalDenom: "0x0000000000000000000000000000000000000000", 
            coinDecimals: 18, 
            coinGeckoId: "ethereum", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "ETH",
            coinMinimalDenom: "0x0000000000000000000000000000000000000000",
            coinDecimals: 18,
            coinGeckoId: "ethereum",
            gasPriceStep: {
                low: 0.00,
                average: 0.025,
                high: 0.04,
            },
        },
    ],
    stakeCurrency: {
        coinDenom: "ETH",
        coinMinimalDenom: "0x0000000000000000000000000000000000000000",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
    }
}



export const cosmosHub: KeplrEndpoints = {
    chainId: "cosmoshub-4",
    chainName: "cosmoshub-4",
    rpc: "https://rpc-cosmoshub-ia.cosmosia.notional.ventures",
    rest: "https://api-cosmoshub-ia.cosmosia.notional.ventures",
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "cosmos",
        bech32PrefixAccPub: "cosmos" + "pub",
        bech32PrefixValAddr: "cosmos" + "valoper",
        bech32PrefixValPub: "cosmos" + "valoperpub",
        bech32PrefixConsAddr: "cosmos" + "valcons",
        bech32PrefixConsPub: "cosmos" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "uatom", 
            coinMinimalDenom: "uatom", 
            coinDecimals: 6, 
            coinGeckoId: "cosmos", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "uatom",
            coinMinimalDenom: "uatom",
            coinDecimals: 6,
            coinGeckoId: "cosmos",
            gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04,
            },
        },
    ],
    stakeCurrency: {
        coinDenom: "uatom",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
    }
}


export const cosmosHubTheta: KeplrEndpoints = {
    chainId: "theta-testnet-001",
    chainName: "Cosmos Hub Theta",
    rpc: "https://cosmos-testnet-rpc.allthatnode.com:26657",
    rest: "https://cosmos-testnet-rpc.allthatnode.com:1317",
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "cosmos",
        bech32PrefixAccPub: "cosmos" + "pub",
        bech32PrefixValAddr: "cosmos" + "valoper",
        bech32PrefixValPub: "cosmos" + "valoperpub",
        bech32PrefixConsAddr: "cosmos" + "valcons",
        bech32PrefixConsPub: "cosmos" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "uatom", 
            coinMinimalDenom: "uatom", 
            coinDecimals: 6, 
            coinGeckoId: "cosmos", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "uatom",
            coinMinimalDenom: "uatom",
            coinDecimals: 6,
            coinGeckoId: "cosmos",
            gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04,
            },
        },
    ],
    stakeCurrency: {
        coinDenom: "uatom",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
    }
}
