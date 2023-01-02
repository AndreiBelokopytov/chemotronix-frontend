import compose from "compose-function";
import { themeProvider, rainbowKitProvider } from "./providers";
import { Dashboard } from "./pages";

export const App = () =>
  compose(themeProvider, rainbowKitProvider)(<Dashboard />);
