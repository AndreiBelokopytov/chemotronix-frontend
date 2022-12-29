import compose from "compose-function";
import { themeProvider } from "./providers";
import { Dashboard } from "./pages";

export const App = () => compose(themeProvider)(<Dashboard />);
