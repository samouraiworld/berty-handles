import { grpc } from "@improbable-eng/grpc-web";
import { useQuery } from "@tanstack/react-query";

import { marketplaceEndpoint } from "../lib/config";
import {
  GrpcWebImpl,
  MarketplaceServiceClientImpl,
} from "../lib/teritori-marketplace/v1/marketplace";

export const useCollectionStats = (id: string) => {
  return useQuery(
    ["collectionStats", id],
    async () => {
      const marketPlaceRpc = new GrpcWebImpl(marketplaceEndpoint, {
        transport: grpc.WebsocketTransport(),
        debug: false,
      });

      const client = new MarketplaceServiceClientImpl(marketPlaceRpc);

      const reply = await client.CollectionStats({ collectionId: id });

      return reply.stats;
    },
    { staleTime: Infinity }
  );
};
