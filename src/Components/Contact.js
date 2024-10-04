import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "385c199e-9187-4375-a88e-81596852e4fc");

      const object = Object.fromEntries(formData.entries());
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const resData = await response.json();

      if (resData.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        event.target.reset();
      } else {
        console.log("Error:", resData);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div className="container-fluid mt-5 mb-5 p-4" style={{ 
      background: 'linear-gradient(to top left, #ff7e5f, #feb47b)',
      animation: 'gradient 5s ease infinite'
    }}>
      <div className="text-center mb-4">
        <h1 className="display-4">Contact Us</h1>
        <p className="lead">
          We'd love to hear from you! Please fill out the form below and we'll
          get in touch with you shortly.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="contact-name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
