import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/user_context";

const NavLinks = ({ links }) => {
  const {myUser} = useAuthContext();
  return (
    <ul className="nav-links">
      {links.map((link) => (
        <li key={link.id}>
          <Link to={link.url} className="links">{link.text}</Link>
        </li>
      ))}
      {myUser ? <li>
          <Link to='checkout' className="links">Checkout</Link>
        </li> : null}
    </ul>
  );
};

export default NavLinks;
