import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    title: "Recipe Book App",
    shortDesc:
      "A feature-rich full-stack Recipe Book App where users can register, log in, and manage personal recipes. It includes recipe creation, editing, filtering, likes, and responsive design — built using React, Node.js, MongoDB, Tailwind CSS, and Firebase Authentication.",
    fullDesc:
      "The Recipe Book App is a complete full-stack web application that allows users to manage their culinary ideas with ease. Users can create an account using Firebase Authentication, log in securely, and perform all CRUD (Create, Read, Update, Delete) operations on their recipes. Each recipe includes a title, image, category, description, and list of ingredients. Users can like recipes, filter them by category, and view details on dedicated pages. A clean, modern user interface has been designed using Tailwind CSS and DaisyUI, ensuring a responsive experience across all devices. The backend is powered by Node.js and Express, with MongoDB used for persistent data storage and Mongoose for schema management. JWT is used to protect routes and verify user identity. The project also integrates Framer Motion for smooth animations and is deployed using Vercel (frontend) and Render (backend). This project demonstrates skills in user authentication, protected routing, form validation, backend API design, database operations, and responsive UI development — making it a powerful example of a modern MERN stack application.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "express.js",
    ],
    image: "https://i.ibb.co/qFj4CHyr/Screenshot-2025-06-28-154520.png", // main image
    live: "https://recipe-book-27cb2.web.app",
    github: "https://github.com/MottuqeBrid/recipe-Book.git",
    screenshots: [
      "https://i.ibb.co/cSnFHPbz/Screenshot-2025-06-28-154529.png",
      "https://i.ibb.co/7xJBmnnm/Screenshot-2025-06-28-154612.png",
      "https://i.ibb.co/XrYPg6qL/Screenshot-2025-06-28-154553.png",
      "https://i.ibb.co/fVFqmMjN/Screenshot-2025-06-28-154539.png",
      "https://i.ibb.co/m5FLHvjT/Screenshot-2025-06-28-154600.png",
    ],
    features: [
      "User registration and login with Firebase Authentication",
      "Create, read, update, and delete (CRUD) recipes",
      "Like and unlike recipes to save favorites",
      "Filter recipes by category (e.g., Breakfast, Dessert, etc.)",
      "Responsive and mobile-friendly UI using Tailwind CSS & DaisyUI",
      "Protected routes using JWT (only logged-in users can access dashboard features)",
      "Custom dashboard for managing personal recipes",
      "Recipe details page with full description and ingredients",
      "Modern animations with Framer Motion",
      "Backend API built with Node.js, Express, and MongoDB",
      "Data validation with Mongoose schemas",
      "Real-time toast notifications with React Toastify",
      "Deployed frontend on Vercel, backend on Render",
      "Error handling for invalid routes and server responses",
      "Clean code structure with reusable React components",
    ],
  },
  {
    title: "NoteHub - Note Taking App",
    shortDesc:
      "NoteHub is a modern note management app with secure JWT-based authentication and password hashing using bcryptjs. Users can create, update, and delete notes with data stored in MongoDB. The app features a clean UI built with React and Tailwind CSS.",
    fullDesc:
      "NoteHub is a secure, full-stack note-taking application that allows users to efficiently create, edit, and manage personal notes. It implements user authentication using JWT tokens for stateless security and bcryptjs for password hashing and verification, ensuring robust user data protection. The backend API, built with Node.js and Express.js, communicates with a MongoDB database to persist user data and notes. The frontend is crafted with React, styled using Tailwind CSS and DaisyUI for a clean, responsive design. Users can register and log in, after which they access a personalized dashboard to manage their notes. The app supports full CRUD operations on notes, and state updates instantly reflect changes without needing page reloads. Route protection is enforced using JWT to prevent unauthorized access. This project demonstrates practical backend authentication techniques, secure password handling, API design, frontend state management, and a modern UI.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "https://i.ibb.co/4w5H2XTL/Screenshot-2025-06-28-154749.png", // main image
    live: "https://notehub.toytree.top",
    github: "https://github.com/MottuqeBrid/notehub-clint.git",
    screenshots: [
      "https://i.ibb.co/dsg4htqr/Screenshot-2025-06-28-154836.png",
      "https://i.ibb.co/5gpTnH58/Screenshot-2025-06-28-154844.png",
      "https://i.ibb.co/My3sPMW3/Screenshot-2025-06-28-154825.png",
      "https://i.ibb.co/Mx8ykKq9/Screenshot-2025-06-28-154814.png",
      "https://i.ibb.co/S4qvw2sP/Screenshot-2025-06-28-154755.png",
      "https://i.ibb.co/KjXSM7zV/Screenshot-2025-06-28-154759.png",
    ],
    features: [
      "User registration and login with JWT authentication",
      "Secure password hashing with bcryptjs",
      "Create, read, update, and delete (CRUD) personal notes",
      "Notes data stored in MongoDB with Mongoose schemas",
      "Protected routes on backend and frontend using JWT",
      "Responsive UI with React, Tailwind CSS, and DaisyUI",
      "Real-time UI updates without page reload",
      "Form validation and user-friendly toast notifications",
      "Secure API endpoints with token verification middleware",
      "Clean and maintainable codebase with separation of concerns",
      "Deployed frontend and backend with environment-based configs",
    ],
  },
  {
    title: "Durjog bd - Disaster News App",
    shortDesc:
      "Durjog bd is a disaster news app that provides real-time updates and information on natural disasters in Bangladesh. The app features a user-friendly interface built with React and Tailwind CSS.",
    fullDesc:
      "Durjog BD is a comprehensive disaster awareness and management platform focused on Bangladesh. It offers users real-time updates on natural disasters such as floods, cyclones, and earthquakes. The website provides educational content, safety guidelines, emergency contact information, and community resources to empower citizens before, during, and after disasters. The frontend is developed using React with Tailwind CSS and DaisyUI for a modern, mobile-friendly interface. The backend, powered by Node.js, Express.js, and MongoDB, manages data related to disaster events, user reports, and resource listings. Features include user registration and authentication (using JWT), disaster alerts, a resource directory, and a reporting system where users can submit incident details. The platform is designed to be scalable and accessible, aiming to enhance disaster preparedness and response at a community level.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "firebase",
    ],
    image: "https://i.ibb.co/B5mHFLTQ/Screenshot-2025-06-28-160629.png", // main image
    live: "https://durjog-bd.web.app",
    github: "https://github.com/MottuqeBrid/Durjog-bd.git",
    screenshots: [
      "https://i.ibb.co/HLLg1ffw/Screenshot-2025-06-28-160648.png",
      "https://i.ibb.co/PZZK6QMt/Screenshot-2025-06-28-160639.png",
      "https://i.ibb.co/yFHfq0tK/Screenshot-2025-06-28-160717.png",
      "https://i.ibb.co/qLn47yhz/Screenshot-2025-06-28-160705.png",
      "https://i.ibb.co/kVmPVk8V/Screenshot-2025-06-28-160656.png",
    ],
    features: [
      "User registration and login with JWT authentication",
      "Real-time disaster alerts and notifications",
      "Detailed safety tips and preparedness guidelines",
      "Resource directory with emergency contacts and shelters",
      "User reporting system to submit disaster-related incidents",
      "Mobile-responsive and accessible UI with Tailwind CSS",
      "Backend API built with Node.js, Express, and MongoDB",
      "Admin panel to manage alerts and resources",
      "Data visualization with charts and maps (optional)",
      "Deployed on scalable cloud platforms with environment configs",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-base-100 text-base-content">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        My Projects
      </h2>
      <div className="w-full mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
