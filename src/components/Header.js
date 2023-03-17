import React from "react";

function Header({ title, subTilte }) {
  return (
    <h1 className="title">
      {title}
      <span>{subTilte}</span>
    </h1>
  );
}

export default Header;
