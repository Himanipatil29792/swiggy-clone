import React from "react";
import ReactDOM from "react-dom/client";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
import "../src/index.css";

/* 
Header
    -logo
    -Nav Items

    Body
        -Search
        -RestaurantContainer
        -RestaurantCard

    Footer
        -Copyright
        -Links
        -Address
        -Contact
*/

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

const Header = () => {
  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container w-28">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-wiht-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4 justify-around gap-xl-5">
          <li className="px-4">Home</li>
          <li className="px-4">About Us</li>
          <li className="px-4">Contact Us</li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Meghana Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          value=""
        />
        <button className="px-4 py-1 bg-green-100 m-4" type="button">
          Search
        </button>
      </div>
      <div className="res-container">
        {/* RestaurantCard component */}
        <RestaurantCard />
      </div>
    </div>
  );
};

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
