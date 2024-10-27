import React from "react";
import Collapsible from "./collapsible.jsx";

const Header = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Collapsible />
    </div>
  );
});

Header.displayName = "Header";

export default Header;