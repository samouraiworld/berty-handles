import { useQuery } from "@tanstack/react-query";
import { CosmWasmClient } from "cosmwasm";

import { nsContractAddress, rpcEndpoint } from "../lib/config";
import { TeritoriNameServiceQueryClient } from "../lib/name-service/TeritoriNameService.client";

export const useNSInfo = (tokenId: string) => {
  return useQuery(["nsInfo", tokenId], async () => {
    if (!tokenId) {
      return null;
    }
    try {
      const client = await CosmWasmClient.connect(rpcEndpoint);
      const contractClient = new TeritoriNameServiceQueryClient(
        client,
        nsContractAddress
      );
      const info = await contractClient.nftInfo({ tokenId });
      return info;
    } catch (err) {
      if (err instanceof Error && err.message.includes("not found")) {
        return null;
      }
      throw err;
    }
  });
};
