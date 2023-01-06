import compose from "compose-function";
import { themeProvider, rainbowKitProvider } from "./providers";
import { CssBaseline } from "@mui/material";
import { Router } from "./Router";

export const App = () =>
  compose(
    themeProvider,
    rainbowKitProvider
  )(
    <>
      <CssBaseline />
      <Router />
    </>
  );
