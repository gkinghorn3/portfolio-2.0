import { Fragment } from "react";
import { useForm, ValidationError } from "@formspree/react";

import BaseBtn from "../BaseBtn/BaseBtn.component";

import "./ContactForm.styles.scss";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xoqzgwnq");

  if (state.succeeded) {
    return (
      <p>Thanks for your message, I'll get back to you as soon as I can!</p>
    );
  }

  return (
    <Fragment>
      <div className="form-container" id="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-title">
            <h2>CONTACT</h2>
          </div>

          <div className="form-input-container">
            <div className="input-div ">
              <input type="text" name="name" id="name" />
              <label>Name</label>
            </div>
            <div className="input-div email">
              <input type="email" name="email" id="email" />
              <label>Email</label>
            </div>

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <textarea id="message" name="message" placeholder="Enter your query here..." />
          <ValidationError
            prefix="Message"
            field="message"
            
            errors={state.errors}
          />
          <div className="btn-container">
            <button className="submit-btn" type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactForm;
