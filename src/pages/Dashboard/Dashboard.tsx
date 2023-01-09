import { Paper, Typography } from "@mui/material";
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
          sx={{ width: { sm: "100%", md: "auto" }, minWidth: { md: 275 } }}
        />
        <DevicesCard
          devices={devices}
          sx={{
            width: { sm: "100%", md: "auto" },
            minWidth: { md: 275 },
            ml: { md: 3 },
            mt: { sm: 3, md: 0 },
          }}
        />
      </Box>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 3,
          overflow: "hidden",
        }}
      >
        <Typography variant="h6" component="h6" sx={{ padding: 2 }}>
          Credit Transaction/Usage
        </Typography>
        <TransactionsTable transactions={transactions} sx={{ flex: 1 }} />
      </Paper>
    </PageLayout>
  );
};
