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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-title">
            <h2>CONTACT</h2>
          </div>

          <div className="form-input-container">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="btn-container">
            <BaseBtn btnText="SEND" className={BaseBtn} type="submit" disabled={state.submitting} />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactForm;
