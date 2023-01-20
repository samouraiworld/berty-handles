import React, { useState } from 'react'
import { 
    teritoriTestEndpoints, 
    teritoriEndpoints, 
    cosmosHub, 
    cosmosHubTheta, 
    ethereumEndpoints, 
    ethereumGoerli 
} from './endpoints'

export interface KeplrProps {
    className: string
}

const KeplrButton = ({className}: KeplrProps) => {    

const [keplrEnabled, setKeplrEnabled] = useState(false);

const endpoints ={
    teritoriEndpoints,
    teritoriTestEndpoints,
    cosmosHub,
    cosmosHubTheta,
    ethereumEndpoints,
    ethereumGoerli
}

const EnableKeplr = async() => {
    const Keplr = window.keplr
    try {
        await Keplr?.enable(endpoints.teritoriEndpoints.chainId)
        setKeplrEnabled(true);
    } catch (err) {
        console.log(`Error enabling Keplr: ${err}`);
      }
}


    const add = async() => {
    if (!window.keplr) {
        window.open('https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap', '_blank')
    } else {
        if (window.keplr.experimentalSuggestChain){

          try {
                await window.keplr.experimentalSuggestChain(endpoints.teritoriEndpoints)
                .then(() => EnableKeplr())
          } catch {
            alert("Failed to suggest the chain");
          }
        }
    }
  }

  return (
    <div>
    { keplrEnabled ? 
    <button className={className} disabled>Connected</button>
         :
     <button className={className} onClick={add}>Connect</button>
     }    
     
    </div>
  )
} 

export default KeplrButton

