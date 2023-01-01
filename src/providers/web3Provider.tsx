import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import React from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { polygonMumbai } from "wagmi/chains";
import { config } from "../config";

export const web3Provider = (children: React.ReactNode) => {
  const { chains, provider } = configureChains(
    [polygonMumbai],
    [alchemyProvider({ apiKey: config.alchemyApiKey }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: config.appName,
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};
