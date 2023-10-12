// PROBABLY NEEDS A BIT OF RE-WORKING

import { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [state, handleSubmit] = useForm("xnqyyrzw");
  const formRef = useRef(null);

  if (state.succeeded) {
    toast.success("Success");
    formRef.current.reset();
  }

  const getYear = new Date().getFullYear();

  return (
    <section className="footer-section">
      <div className="coypyright-text">
        <h2>
          &copy; {getYear} <span>Ivarda/</span>
          <span>ივარდა</span>
        </h2>
      </div>
      <div className="footer-form">
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="text-input" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="text-input" name="email" />
          <textarea
            name="message"
            id="textarea"
            cols="20"
            rows="5"
            placeholder="Give us your thoughts..."
          ></textarea>
          <button
            type="submit"
            disabled={state.submitting}
            className="btn footer-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
