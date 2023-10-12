import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useState } from "react";

const Sidebar = () => {
  const [logged,isLogged] = useState(true);
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <div className={`sidebar-container ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <button className="close-btn" onClick={closeSidebar} data-id="closer">
            <FaTimes />
          </button>
        </div>
        <ul className="responsive-links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {logged ? 
            <li>
              <Link to='checkout' onClick={closeSidebar}>Checkout</Link>
            </li> : null
            }
        </ul>
        <div className="underline"></div>
        <CartButtons />
      </aside>
    </div>
  );
};

export default Sidebar;
