import styles from "../styles/Contact.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Contact = () => {
  const [submitterName, setSubmitterName] = useState("")
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible; 

  // Use nodemailer for Mail service
  const handleSubmit=(e)=> {
    e.preventDefault();
    console.log("Inputs are", submitterName , mail, msg);
  }


  const ConfirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. I will get back to you shortly.
      </p>

      <button
        onClick={() => router.replace("/contact", undefined, { shallow: true })}
      >
        {" "}
        Submit Another Response{" "}
      </button>
    </React.Fragment>
  );

  const ContactForm = (
    <form
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${submitterName}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label className={styles.label}>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <label className={styles.label} htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        required
        type="text"
        onChange={(e) => setSubmitterName(e.target.value)}
        className={styles.input}
      />
      <label className={styles.label} htmlFor="email">E-mail Address</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={(e) => setMail(e.target.value)}
        required
        className={styles.input}
      />
      <label className={styles.label} htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        required
        className={styles.input}
        onChange={(e) => setMsg(e.target.value)}
      ></textarea>
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );

  return (
    <div className={styles.container}>
      <h1>Get in touch</h1>
      <p>
        If you have any questions please complete the form below or reach out to
        me on social media.
      </p>
      {formVisible ? ContactForm : ConfirmationMessage}
      <p>
        Follow me on{" "}
        <a href="https://www.instagram.com/prashantm_yoga?igsh=M3lweHNuNnI3Z3lx">Instagram</a> or{" "}
        <a href="https://www.facebook.com/prashant.madane.353?mibextid=ZbWKwL">Facebook</a>.
      </p>
    </div>
  );
};

export default Contact;
