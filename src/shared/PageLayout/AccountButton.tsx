import { Button } from "@mui/material";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { Address } from "../Address";

export const AccountButton = () => {
  const { openConnectModal } = useConnectModal();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  return address ? (
    <Button color="inherit" onClick={() => disconnect()}>
      <Address substrLength={4}>{address}</Address>
    </Button>
  ) : (
    <Button color="inherit" onClick={openConnectModal}>
      Sign In
    </Button>
  );
};
