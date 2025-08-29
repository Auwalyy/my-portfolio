import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="p-24 flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-16"
    >
      {/* Intro */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-emerald-400">Auwalyy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          A passionate <span className="text-emerald-400">Frontend Developer</span> 
          who loves building modern, responsive, and user-friendly applications 
          with the latest technologies.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-4xl w-full mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-center">
          <li className="bg-gray-800 p-3 rounded-lg shadow hover:bg-emerald-600 transition">
            React
          </li>
          <li className="bg-gray-800 p-3 rounded-lg shadow hover:bg-emerald-600 transition">
            Next.js
          </li>
          <li className="bg-gray-800 p-3 rounded-lg shadow hover:bg-emerald-600 transition">
            React Native
          </li>
          <li className="bg-gray-800 p-3 rounded-lg shadow hover:bg-emeral-600 transition">
            JavaScript
          </li>
          <li className="bg-gray-800 p-3 rounded-lg shadow hover:bg-emerald-600 transition">
            Tailwind CSS
          </li>
          <li className="bg-gray-800 p-3 rounded-lg shadow hover:bg-emerald-600 transition">
            Git & GitHub
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
