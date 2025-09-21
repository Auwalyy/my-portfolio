import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "An AI-powered tool that analyzes resumes against job descriptions to help job seekers improve their chances.",
      link: "https://ai-resume-analyzer-main-kappa.vercel.app/auth?next=/",
    },
    {
      title: "Food Delivery Website",
      description:
        "A full-stack web application for ordering and delivering food, with real-time tracking and vendor dashboards.",
      link: "https://grocery-delivery-website-three.vercel.app/",
    },
    {
      title: "Netflix Clone",
      description:
        "A responsive streaming platform clone with movie browsing, trailers, and modern UI design.",
      link: "https://netflix-clone-neon-seven.vercel.app/",
    },
    {
      title: "YouTube Clone",
      description:
        "A video streaming app with search, recommendations, and player functionality.",
      link: "https://youtube-clone-gvw26b42u-auwalyys-projects.vercel.app/",
    },
    {
      title: "WEB SaSS Landing",
      description:
        "A SaSS for my Web Services",
      link: "https://enourmours-project.vercel.app/", 
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/30 transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
