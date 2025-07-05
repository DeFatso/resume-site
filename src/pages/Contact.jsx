import React, { useState } from "react";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import "../styles/Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contact-page">
      <Navigator />
      <section className="contact-section">
        <h2>Contact Me</h2>
        {submitted ? (
          <p className="thank-you-message">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={() => setSubmitted(true)}
            className="contact-form"
          >
            {/* Netlify hidden form name field */}
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            />

            <button type="submit">Send</button>
          </form>
        )}
      </section>
      <Footer />
    </div>
  );
}