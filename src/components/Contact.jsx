import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // environment variables for sensitive data
    
    const serviceID = process.env.REACT_APP_SERVICE_ID; 
    const templateID = process.env.REACT_APP_TEMPLATE_ID; 
    const userID = process.env.REACT_APP_USER_ID; 

    // Send email via EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSent(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });
  };

  return (
    <section id="contact" className="pt-36 pb-36">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Contact
            </h2>
          </div>
        </div>

        {/* Confirmation message */}

        {isSent && (
          <div className="text-center mt-6">
            <p className="text-green-500">
              Thank you! Your message has been sent successfully.
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-4">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary"
              >
                *Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                required
              />
            </div>

            <div className="w-full px-4 mb-4">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary"
              >
                *Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                required
              />
            </div>

            <div className="w-full px-4 mb-4">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
              ></textarea>
            </div>

            <div className="w-full px-4">
              <button
                type="submit"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
