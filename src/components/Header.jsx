import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

function Header() {
  return (
    <header>
      <h1>
      {/* HighlightIcon is the icon from the material ui icon library */}
      <HighlightIcon />
      Keeper</h1>
    </header>
  );
}

export default Header;
