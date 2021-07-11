import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

// styles
import GlobalStyle from "./theme/global-styles";
import { theme } from "./theme/theme";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router>
					<GlobalStyle />
					<App />
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
