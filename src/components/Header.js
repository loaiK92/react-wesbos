import React from "react";
import PropType from "prop-types";

const Header = props => {
  return (
    <header className="top">
      <h1>
        <span>
          <span className="seafood">SEA</span>
          <span className="seafood">FOOD</span>
        </span>
        <span className="ofThe" />
        <span className="theStore">STORE</span>
      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
};

Header.prototype = {
  tagline: PropType.string.isRequired
};

export default Header;
