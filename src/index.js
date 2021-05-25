// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
//below is a functional component
const App = () => {
	return <div>Hi there!</div>;
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

//Below code added to alow Live Reloading
if (module.hot) {
	module.hot.accept();
}
