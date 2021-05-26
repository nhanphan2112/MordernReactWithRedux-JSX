// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
//below is a functional component
const App = () => {
	const buttonText = { text: "Click me" };
  const labelText = 'Enter name:';

	return (
		<div>
			<label className="label" for="name">
				{labelText}
			</label>
			<input id="name" type="text" />
			{/* <button style="background-color: blue; color:white;">Submit</button> */}
			{/* The usesage of single quote '' in line 16 is for non JSX properties such as css html styling  */}
			<button style={{ backgroundColor: "blue", color: "white" }}>{buttonText.text}</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

//Below code added to alow Live Reloading
if (module.hot) {
	module.hot.accept();
}
