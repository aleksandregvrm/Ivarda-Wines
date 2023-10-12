import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Home,
  Error,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import { Footer, Nav, Sidebar } from "./components";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Nav />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </AuthWrapper>
  );
}

export default App;
