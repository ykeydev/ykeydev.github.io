import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Lately from "./pages/Lately";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Report from "./pages/Report";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#000000",
      main: "#000000",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Route exact path="/" component={Lately} />
        <Route path="/popular" component={Popular} />
        <Route path="/search" component={Search} />
        <Route path="/report" component={Report} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
export default App;
