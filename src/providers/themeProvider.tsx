import React from "react";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    background: {
      default: "#F8FAFC",
      paper: "#fff",
    },
    primary: {
      main: "#008036",
      light: "#00A646",
      dark: "#00662B",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 862,
      lg: 1200,
      xl: 1536,
    },
  },
});

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: theme.palette.background,
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      color: "transparent",
      elevation: 0,
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paperAnchorLeft: {
        borderRight: 0,
      },
    },
  },
  MuiCard: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
        textTransform: "none",
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        margin: "0 16px 8px 16px",
        borderRadius: "48px",
      },
    },
  },
};

theme = createTheme(theme, { components });

export const themeProvider = (children: React.ReactNode) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
