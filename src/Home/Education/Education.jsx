import React from "react";

const Education = () => {
  return (
    <div className="py-16 bg-base-100 text-base-content px-4 md:px-10">
      <h2 className="text-3xl font-bold text-primary text-center mb-10">
        Education
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="border-l-4 border-primary pl-6 relative">
          {/* Timeline dot */}
          <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full shadow-md"></div>

          {/* Education Item */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Khulna University</h3>
            <p className="text-sm opacity-80">B.Sc. in Statistics Discipline</p>
            <p className="text-sm text-base-content">August 2023 — Present</p>
            <p className="text-sm mt-2 leading-relaxed">
              I am an undergraduate student at Khulna University, currently
              pursuing a degree in Statistics. Alongside my academic studies, I
              am actively learning and building skills in modern web
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
