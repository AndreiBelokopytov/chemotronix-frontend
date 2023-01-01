import compose from "compose-function";
import { themeProvider, web3Provider } from "./providers";
import { Dashboard } from "./pages";

export const App = () => compose(themeProvider, web3Provider)(<Dashboard />);
