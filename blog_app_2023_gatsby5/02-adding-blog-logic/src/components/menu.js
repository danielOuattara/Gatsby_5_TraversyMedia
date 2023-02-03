import * as React from "react";
import { Link } from "gatsby";

export default function Menu() {
  return (
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-evenly`,
        background: `#f4f4f4`,
        paddingTop: `10px`,
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
    </ul>
  );
}
