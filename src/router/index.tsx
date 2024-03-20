import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import AddTutorials from "../pages/AddTutorials";
import Error from "../pages/misc/Error";
import Tutorials from "../pages/Tutorials";

const Router = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add-tutorials" element={<AddTutorials />} />
				<Route path="/tutorial/:id" element={<Tutorials />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
