// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
	return "Click on me!";
}
// Create a react component
//below is a functional component
const App = () => {
	return (
		<div>
			<label className="label" for="name">
				Enter name:
			</label>
			<input id="name" type="text" />
			{/* <button style="background-color: blue; color:white;">Submit</button> */}
			{/* The usesage of single quote '' in line 16 is for non JSX properties such as css html styling  */}
			<button style={{ backgroundColor: "blue", color: "white" }}>{getButtonText()}</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

//Below code added to alow Live Reloading
if (module.hot) {
	module.hot.accept();
}
