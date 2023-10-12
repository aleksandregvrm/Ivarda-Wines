import { FaBars } from "react-icons/fa";
import CartButtons from "./CartButtons";
import NavLinks from "./NavLinks";
import Logo from "../assets/logo.jpg";
import { links } from "../utils/constants";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useProductsContext();
  return (
    <section className="navbar-section">
      <div className="navbar-container">
        <h1>
          <Link to="/">
            <span>Ivarda/</span>
            <span>ივარდა</span>
          </Link>
        </h1>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo image" />
          </Link>
        </div>
        {isSidebarOpen ? null : (
          <button onClick={openSidebar} className="nav-btn">
            <FaBars />
          </button>
        )}
        <NavLinks links={links} />
        <div className="navbar-cart">
          <CartButtons />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
