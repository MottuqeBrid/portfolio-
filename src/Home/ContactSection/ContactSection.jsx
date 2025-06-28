import React from "react";
import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-base-100 text-base-content px-4 md:px-10"
    >
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold opacity-80 mb-2">
            Let's Connect
          </h3>

          <div className="flex items-center gap-3">
            <Phone className="text-primary" />
            <span>+8801308133343</span>
          </div>

          <div className="flex items-center gap-3">
            <MessageCircle className="text-primary" />
            <span>WhatsApp: +8801308133343</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-primary" />
            <span>mottuqebrid@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <Github className="text-primary" />
            <a
              href="https://github.com/MottuqeBrid"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              github.com/MottuqeBrid
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Linkedin className="text-primary" />
            <a
              href="https://www.linkedin.com/in/md-mottuqe-brid"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              linkedin.com/in/md-mottuqe-brid
            </a>
          </div>
        </div>

        {/* Right: Email Me Form */}
        <form className="card shadow-lg bg-base-200 p-6 space-y-4">
          <h3 className="text-xl font-semibold opacity-80 mb-2">Email Me</h3>

          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full"
            required
          />

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Your message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
