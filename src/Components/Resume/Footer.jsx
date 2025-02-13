import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rahul Mudgal. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/mudgalrahul/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500"
          >
            LinkedIn
              
          </a>
          <a
            href="https://github.com/Rahulmudgal53/readMe"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-500"
          >
            GitHub
          </a>
          <a
    href="https://wa.me/918595232442?text=Hi%20Rahul%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
    target="_blank"
    rel="noreferrer"
    className="hover:text-yellow-500"
  >
    WhatsApp Me
  </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
