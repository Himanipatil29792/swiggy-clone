import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import "../src/index.css";

//React.createElement => Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namste Swiggy 👍"
// );

//JSx and html is like sentax, but not a html
//JSX (transpiled before it reaches the JS) - Parcel - Babel
// const jsxHeading = <h1>Namaste React using JSX 👍 </h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(jsxHeading);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
