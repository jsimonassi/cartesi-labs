import React from "react";
import "./App.css";
import BaseBtn from "./components/buttons/BaseBtn";
import Tutorials from "./pages/Tutorials";

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
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
				<BaseBtn variant="contained" size="md" color="black">Botao</BaseBtn>
			</header> */}
			<Tutorials />
		</div>
	);
}

export default App;
