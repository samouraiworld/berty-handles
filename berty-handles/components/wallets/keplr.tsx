import React, { Children } from 'react'

export interface keplrProps{
    children: any
    className: string
}

const KeplrButton = ({children, className}: keplrProps) => {
    

    async function add() {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else {
        if (window.keplr.experimentalSuggestChain){
          try {
                await window.keplr.experimentalSuggestChain({
                        chainId: "cosmos-test",
                        chainName: "Cosmos-test",
                        rpc: "http://123.456.789.012:26657",
                        rest: "http://123.456.789.012:1317",
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
                                coinDenom: "ATOM", 
                                coinMinimalDenom: "uatom", 
                                coinDecimals: 6, 
                                coinGeckoId: "cosmos", 
                            }, 
                        ],
                        feeCurrencies: [
                            {
                                coinDenom: "ATOM",
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
                            coinDenom: "ATOM",
                            coinMinimalDenom: "uatom",
                            coinDecimals: 6,
                            coinGeckoId: "cosmos",
                        },
                    });
          } catch {
            alert("Failed to suggest the chain");
          }
        }
        // const chainId = params.chainId;
        // await window.keplr.enable(chainId);
    }
  }

  return (
      <button className={className} onClick={add}>{children}</button> 
  )
} 

export default KeplrButton

