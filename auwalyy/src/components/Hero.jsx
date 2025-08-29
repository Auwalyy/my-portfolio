import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F8FAFC] py-24 flex items-center justify-center px-1">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-7xl font-bold text-[#0F172A]">
          Hi, I’m <span className="text-[#3B82F6]">Auwalu Muhammad Izziddin</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#1E293B]">
          Frontend Developer | React Enthusiast | Software Engineer
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-[#3B82F6] text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-[#0F172A] text-[#0F172A] px-6 py-3 rounded-lg hover:bg-[#0F172A] hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
