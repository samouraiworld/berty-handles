import { useQuery } from "@tanstack/react-query";
import { CosmWasmClient } from "cosmwasm";

import { nsContractAddress, rpcEndpoint } from "../lib/config";
import { TeritoriNameServiceQueryClient } from "../lib/name-service/TeritoriNameService.client";

export const useNSPrice = (tokenId: string) => {
  return useQuery(
    ["nsPrice", tokenId],
    async () => {
      if (!tokenId) {
        return null;
      }
      const client = await CosmWasmClient.connect(rpcEndpoint);
      const contractClient = new TeritoriNameServiceQueryClient(
        client,
        nsContractAddress
      );
      const price = await contractClient.mintPrice({ tokenId });
      return price;
    },
    { staleTime: Infinity }
  );
};
