import React from "react";
import "./App.css";
import BaseBtn from "./components/buttons/BaseBtn";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
          Cartesi Labs
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
          Learn React
				</a>

				<h1 className="undeline bg-red-500 text-h4">
          Hello world!
				</h1>
				<BaseBtn color="black">Botao</BaseBtn>
			</header>
		</div>
	);
}

export default App;
