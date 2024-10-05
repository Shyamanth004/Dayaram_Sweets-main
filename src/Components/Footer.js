import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faXTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F4C430] text-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4">
          <div className="flex flex-col items-center mb-4 sm:mb-0">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Brand Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-black">Dayaram Sweets</span>
            </div>

            <div className="mt-2">
              <img
                src="/fssai.png"
                alt="FSSAI Mark"
                className="h-10 w-auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white"
              >
                <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white"
              >
                <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-[#FEBF52] hover:bg-[#FBCC7C] text-white rounded-full transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>
            </button>
          </div>
        </div>

        <div className="border-t border-white pt-4">
          <p className="text-center text-sm sm:text-base text-black">
            © 2024 Dayaram Sweets | All rights reserved | Powered by SKS Web Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
