import React from "react";

const AboutMe = () => {
  return (
    <section className="py-16 px-4 " id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Passionate web developer , dedicated to creating exceptional digital
            experiences through clean code and innovative solutions.
          </p>
        </div>

        {/* Left Column - Personal Info */}
        <div className="space-y-8">
          {/* Personal Story */}
          <div className="bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">My Story</h3>
            <div className="space-y-4 text-base-content/80 leading-relaxed">
              <p>
                Hello! I'm{" "}
                <span className="font-semibold text-primary">
                  Md. Mottuqe Brid
                </span>
                , a passionate web developer based in the beautiful city of
                Khulna, Bangladesh. My journey into the world of programming
                began with curiosity and has evolved into a deep passion for
                creating digital solutions that make a difference.
              </p>
              <p>
                I specialize in building modern, responsive web applications
                using cutting-edge technologies. My approach combines technical
                expertise with creative problem-solving to deliver exceptional
                user experiences that not only look great but perform
                flawlessly.
              </p>
              <p>
                You'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer
                community. I believe in continuous learning and staying updated
                with the latest industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
