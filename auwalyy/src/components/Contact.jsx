import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_i52vhin",         
        "template_xxxxxx",          // ✅ Replace with your template ID
        formRef.current,
        "aDar8Z_Ssw1bcorS8"      
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          alert("Something went wrong. Please try again!");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-emerald-400 mb-8">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-12">
          Interested in working together or have a question? Let’s connect!
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="mt-4 text-emerald-400 font-medium">
              ✅ Message sent successfully!
            </p>
          )}
        </form>

        <div className="flex justify-center space-x-8 mt-12">
          <a
            href="mailto:auwaluizziddin2212@gmail.com"
            className="text-emerald-400 hover:text-emerald-500 text-3xl transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Auwalyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-500 text-3xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/auwalu-muhammad-izziddin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-500 text-3xl transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
