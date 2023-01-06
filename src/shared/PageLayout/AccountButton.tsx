import { Button } from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { Address } from "../Address";

export const AccountButton = () => {
  const { openConnectModal } = useConnectModal();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  return address ? (
    <Button onClick={() => disconnect()}>
      <Address substrLength={4}>{address}</Address>
      <LogoutIcon sx={{ marginLeft: 2 }} fontSize="small" />
    </Button>
  ) : (
    <Button variant="contained" onClick={openConnectModal}>
      Connect
    </Button>
  );
};
