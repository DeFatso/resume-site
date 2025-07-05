import React, { useState } from "react";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => alert(error));
  };

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
            className="contact-form"
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            {/* Hidden form-name field */}
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            />

            <button type="submit">Send</button>
          </form>
        )}
      </section>
      <Footer />
    </div>
  );
}
