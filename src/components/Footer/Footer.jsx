import React from "react";
import PropTypes from "prop-types";

const Footer = ({ links = [] }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-12"
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Enlaces de Navegación con Espaciado Elegante */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              data-testid="footerLink"
              href={link.url}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p data-testid="footerText" className="text-sm text-gray-400 dark:text-gray-500">
          &copy; {currentYear} Nick Gonzalez
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default Footer;
