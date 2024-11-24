import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 lg:px-36 px-6">
      {/* Footer Top */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Info */}
          <div>
            <a
              href="/"
              className="flex items-center mb-4"
            >
              <img
                src={logo}
                alt="Paymine Logo"
                className="w-20"
              />
            </a>
            <p className="text-gray-400">
              Paymine is a well-established Fintech Company helping rural and
              urban India access banking facilities digitally anywhere in the
              country.
            </p>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.facebook.com/onlinePaymine"
                target="_blank"
                className="text-blue-500 hover:text-white"
                rel="noopener noreferrer"
              >
                <i className="ri-facebook-line text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com/Paymineonline/"
                target="_blank"
                className="text-pink-500 hover:text-white"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/Paymine/"
                target="_blank"
                className="text-blue-300 hover:text-white"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-line text-2xl"></i>
              </a>
              <a
                href="https://twitter.com/Paymineonline"
                target="_blank"
                className="text-blue-400 hover:text-white"
                rel="noopener noreferrer"
              >
                <i className="ri-twitter-line text-2xl"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCvzYid2iqX3H4aOYTYg3K_g?sub_confirmation=1"
                target="_blank"
                className="text-red-500 hover:text-white"
                rel="noopener noreferrer"
              >
                <i className="ri-youtube-line text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About us" },
                { href: "/services", text: "Services" },
                { href: "/contact", text: "Contact Us" },
                {
                  href: "/term-condition",
                  text: "Terms of Service",
                },
                { href: "/privacy-policy", text: "Privacy Policy" },
                { href: "/refund-policy", text: "Refund Policy" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/aeps", text: "AEPS" },
                { href: "/android-App-Development", text: "Android APP DEVELOPMENT" },
                { href: "/Recharge-Software", text: "Recharge-Software" },
                { href: "/moneytransfer-api", text: "money transfer" },
                { href: "/upicollection-api", text: "upi Collection" },
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 capitalize hover:text-white flex items-center"
                  >
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Contact Us
            </h4>
            <p className="text-gray-400">
              301, 3rd floor, Infinity Business Park, H-221, Sector-63,
              Noida-201301, Uttar Pradesh.
              <br />
              <strong>Phone:</strong> +91 - 9311805674
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:sales@Paymine.com"
                className="text-blue-300 hover:text-white"
              >
                sales@Paymine.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400">
          ©2024 Copyright <strong className="text-white">Paymine</strong>. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
