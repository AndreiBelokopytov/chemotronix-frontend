import React from "react";
import { AppBar, Toolbar, CssBaseline, Box, Typography } from "@mui/material";
import { config } from "../../config";
import { AccountButton } from "./AccountButton";

type Props = React.PropsWithChildren;

export const PageLayout = ({ children }: Props) => (
  <>
    <CssBaseline />
    <AppBar position="absolute" component="nav">
      <Toolbar>
        <Typography variant="h6">{config.appName}</Typography>
        <Box flex={1} />
        <AccountButton />
      </Toolbar>
    </AppBar>
    <Box component="main" padding={3}>
      <Toolbar />
      {children}
    </Box>
  </>
);