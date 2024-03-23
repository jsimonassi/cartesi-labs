import React from "react";
import "./App.css";
import Router from "./router";
import AppProvider from "./contexts";

function App() {
	return (
		<AppProvider>
			<Router />
		</AppProvider>
	);
}

export default App;
