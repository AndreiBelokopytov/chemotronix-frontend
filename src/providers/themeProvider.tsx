import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export const themeProvider = (children: React.ReactNode) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
