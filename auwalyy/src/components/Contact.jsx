import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-emerald-400 mb-8">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-12">
          Interested in working together or have a question? Let’s connect!
        </p>

        {/* Contact Form */}
        <form
          className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
          action="https://formspree.io/f/mnqezzaj" // Replace with your Formspree endpoint or backend
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            name="email"
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
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-12">
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-500 text-3xl transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-500 text-3xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
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
