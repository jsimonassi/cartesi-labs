import React from "react";
import "./App.css";
import Router from "./router";
import AppProvider from "./contexts";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<AppProvider>
			<Toaster />
			<Router />
		</AppProvider>
	);
}

export default App;
