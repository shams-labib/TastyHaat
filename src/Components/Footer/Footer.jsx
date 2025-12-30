import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-12">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start">
          {/* Brand Section */}
          <div className="max-w-sm mx-auto md:mx-0">
            <h2 className="text-3xl font-bold text-secondary tracking-tight">
              TastyHaat
            </h2>
            <p className="text-md text-justify font-medium opacity-80 mt-4 leading-relaxed">
              TastyHaat delivers fresh, delicious food with quality ingredients,
              fast service, and authentic flavors to satisfy every craving.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="footer-title text-white opacity-100 mb-4 uppercase tracking-widest text-xs">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="footer-title text-white opacity-100 mb-4 uppercase tracking-widest text-xs">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              <Link
                to="/"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-white/10 border border-white/10
                           hover:bg-secondary hover:text-neutral
                           transition-all duration-300 hover:-translate-y-1"
              >
                <FaFacebook className="text-lg" />
              </Link>

              <Link
                to="/"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-white/10 border border-white/10
                           hover:bg-secondary hover:text-neutral
                           transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram className="text-lg" />
              </Link>

              <Link
                to="/"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-white/10 border border-white/10
                           hover:bg-secondary hover:text-neutral
                           transition-all duration-300 hover:-translate-y-1"
              >
                <FaTwitter className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-neutral/60 py-6 text-center text-xs opacity-70">
        © 2025 <span className="font-semibold text-secondary">TastyHaat</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
