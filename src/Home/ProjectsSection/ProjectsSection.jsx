import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    title: "Recipe Book App",
    shortDesc: "A full-stack recipe manager with authentication and filters.",
    fullDesc:
      "The Recipe Book App allows users to sign up, add and edit recipes, like and filter them by category...",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
    image:
      "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg", // main image
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
    screenshots: [
      "https://techblume.in/static/media/Projects-img.a57e3d67b0514ab3f441.png",
      "https://techblume.in/static/media/Projects-img.a57e3d67b0514ab3f441.png",
      "https://techblume.in/static/media/Projects-img.a57e3d67b0514ab3f441.png",
    ],
    features: [
      "User Authentication (Firebase)",
      "Add / Edit / Delete Recipes",
      "Filter by categories",
      "Like and Save features",
      "Mobile-responsive layout",
    ],
  },
  {
    title: "Recipe Book App",
    shortDesc: "A full-stack recipe manager with authentication and filters.",
    fullDesc:
      "The Recipe Book App allows users to sign up, add and edit recipes, like and filter them by category...",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
    image:
      "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg", // main image
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
    screenshots: [
      "https://techblume.in/static/media/Projects-img.a57e3d67b0514ab3f441.png",
      "https://techblume.in/static/media/Projects-img.a57e3d67b0514ab3f441.png",
      "https://techblume.in/static/media/Projects-img.a57e3d67b0514ab3f441.png",
      "https://techblume.in/static/media/Projects-img.a57e3d67b0514ab3f441.png",
      "https://techblume.in/static/media/Projects-img.a57e3d67b0514ab3f441.png",
    ],
    features: [
      "User Authentication (Firebase)",
      "Add / Edit / Delete Recipes",
      "Filter by categories",
      "Like and Save features",
      "Mobile-responsive layout",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-base-100 text-base-content px-4 md:px-10"
    >
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
