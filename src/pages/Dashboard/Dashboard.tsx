import { Box } from "@mui/system";
import { BigNumber } from "ethers";
import { PageLayout } from "../../shared/PageLayout";
import { CarbonCreditsCard } from "./CarbonCreditsCard";
import { DevicesCard } from "./DevicesCard";
import { Transaction, TransactionsTable } from "./TransactionsTable";

export const Dashboard = () => {
  const carbonCreditsBalance = BigNumber.from("25000000000000000000");
  const devices = 3;
  const transactions: Transaction[] = [];

  return (
    <PageLayout title="Dashboard">
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <CarbonCreditsCard
          balance={carbonCreditsBalance}
          sx={{ minWidth: 275 }}
        />
        <DevicesCard devices={devices} sx={{ marginLeft: 3, minWidth: 275 }} />
        <TransactionsTable
          transactions={transactions}
          sx={{ flex: 1, overflow: "visible", marginTop: 3 }}
        />
      </Box>
    </PageLayout>
  );
};
