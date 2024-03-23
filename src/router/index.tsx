import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import { Home } from "../pages/Home";
import AddTutorials from "../pages/AddTutorials";
import Error from "../pages/misc/Error";
import Tutorials from "../pages/Tutorials";
import { Navbar } from "../components/Navbar";

const Router = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add-tutorials" element={<AddTutorials />} />
				<Route path="/tutorial/:tutorialId" element={<Tutorials />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
