import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
        {/* Project Image */}
        <figure className="w-full lg:w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </figure>

        {/* Info */}
        <div className="card-body w-full lg:w-1/2">
          <h2 className="card-title text-primary">{project.title}</h2>
          <p className="text-sm text-base-content">{project.shortDesc}</p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="badge badge-outline badge-primary text-xs"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="card-actions justify-start mt-4 flex flex-wrap gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              GitHub
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-sm btn-accent"
            >
              Show Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box max-w-4xl overflow-y-auto max-h-[80vh]">
            <h3 className="font-bold text-lg text-primary mb-4">
              {project.title}
            </h3>
            <p className="mb-4 text-base-content">{project.fullDesc}</p>

            {/* Screenshots */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {project.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="rounded shadow"
                />
              ))}
            </div>

            {/* Features */}
            <h4 className="text-base font-semibold text-secondary mb-2">
              Key Features:
            </h4>
            <ul className="list-disc list-inside text-sm space-y-1 text-base-content">
              {project.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            {/* Close Button */}
            <div className="modal-action mt-6">
              <button onClick={() => setShowModal(false)} className="btn">
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default ProjectCard;
