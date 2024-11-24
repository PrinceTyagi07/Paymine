import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaServicestack, FaInfoCircle, FaPhoneAlt, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility on mobile
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
    const [apiDropdownOpen, setApiDropdownOpen] = useState(false); // State to manage API Solution dropdown

    let links = [
        { link: "Home", path: "/", icon: <FaHome /> },
        { link: "Software", path: "/software", icon: <FaPhoneAlt /> },
        { link: "API Solution", path: "/solution", icon: <FaPhoneAlt /> },
        { link: "Services", path: "/services", icon: <FaServicestack /> },
        { link: "About Us", path: "/about", icon: <FaInfoCircle /> },
        { link: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
    ];

    let softwareDropdownItems = [
        { name: "AEPS", path: "/aeps" },
        { name: "APP-DEVELOPMENT", path: "/android-App-Development" },
        { name: "BBPS", path: "/bbps" },
        { name: "MPOS", path: "/mpos" },
        { name: "PAN-SERVICE", path: "/panservices" },
        { name: "RECHARGE-SOFTWARE", path: "/Recharge-Software" },
    ];
    let apiSolutionItem = [
        { name: "AEPS-api", path: "/apes-api" },
        { name: "MoneyTransferApi", path: "/moneytransfer-api" },
        { name: "panApi", path: "/pan-api" },
        { name: "RechargeApi", path: "/recharge-api" },
        { name: "UPICollectionApi", path: "/upicollection-api" }
    ];

    const handleLogin = () => {
        navigate('/login'); // Navigate to login page
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the mobile menu
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Toggle the dropdown
        setApiDropdownOpen(false); // Toggle API dropdown
    };
    
    const toggleApiDropdown = () => {
        setDropdownOpen(false); // Toggle the dropdown
        setApiDropdownOpen(!apiDropdownOpen); // Toggle API dropdown
    };

    const handleLinkClick = () => {
        setDropdownOpen(false); // Close dropdown on nav link click
        setApiDropdownOpen(false); // Close API dropdown
        setMenuOpen(false); // Close mobile menu
    };

    return (
        <div className="relative flex justify-between items-center p-4 px-8 shadow-md shadow-blue-400 bg-white border-b-2">
            <div className="w-36 mt-1">
                <img src={logo} alt="Logo" className="w-full" />
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-2xl">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-6">
                <ul className="flex space-x-6 py-4">
                    {links.map((link, index) => (
                        <li key={index} className="relative cursor-pointer">
                            {link.link === "Software" ? (
                                <div
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    <div
                                        className="flex items-center space-x-1 text-blue-950 font-semibold hover:scale-105 hover:text-blue-600"
                                        onClick={toggleDropdown}
                                    >
                                        {link.link} {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                    <ul
                                        className={`absolute z-30 bg-white shadow-lg rounded-md p-2 space-y-1 flex flex-col w-[250%] transition-all duration-700 transform ${dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
                                    >
                                        {softwareDropdownItems.map((item, idx) => (
                                            <Link
                                                to={item.path}
                                                key={idx}
                                                className="text-gray-700 hover:text-blue-600 hover:scale-105 px-2 py-1"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            ) : link.link === "API Solution" ? (
                                <div
                                    onMouseEnter={() => setApiDropdownOpen(true)}
                                    onMouseLeave={() => setApiDropdownOpen(false)}
                                >
                                    <div
                                        className="flex items-center space-x-1 text-blue-950 font-semibold hover:scale-105 hover:text-blue-600"
                                        onClick={toggleApiDropdown}
                                    >
                                        {link.link} {apiDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                    <ul
                                        className={`absolute z-30 bg-white shadow-lg rounded-md p-2 space-y-1 flex flex-col w-[250%] transition-all duration-700 transform ${apiDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
                                    >
                                        {apiSolutionItem.map((item, idx) => (
                                            <Link
                                                to={item.path}
                                                key={idx}
                                                className="text-gray-700 hover:text-blue-600 hover:scale-105 px-2 py-1"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="flex items-center space-x-1 text-blue-950 font-semibold hover:scale-105 hover:text-blue-600"
                                    onClick={handleLinkClick}
                                >
                                    {link.link}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <button
                    className="border-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-90"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>

            {/* Mobile Navigation Links */}
            <div
                className={`z-30 lg:hidden absolute top-20 right-0 w-[40%] bg-white shadow-lg transition-all duration-700 ${menuOpen ? 'block' : 'hidden'}`}
            >
                <ul className="space-y-4 p-4">
                    {links.map((link, index) => (
                        <li key={index} className="relative">
                            {link.link === "Software" ? (
                                <div onClick={toggleDropdown}>
                                    <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer">
                                        {link.link} {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                    {dropdownOpen && (
                                        <ul className="mt-2 space-y-2 pl-4 w-[120%]  absolute right-44 bg-white py-5 -top-1 transition-all duration-700 ">
                                            {softwareDropdownItems.map((item, idx) => (
                                                <Link
                                                    to={item.path}
                                                    key={idx}
                                                    className="block text-gray-700 cursor-pointer hover:text-blue-600"
                                                    onClick={handleLinkClick}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : link.link === "API Solution" ? (
                                <div onClick={toggleApiDropdown}>
                                    <div className="flex items-center space-x-1 text-gray-700 cursor-pointer hover:text-blue-600">
                                        {link.link} {apiDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                    {apiDropdownOpen && (
                                        <ul className="mt-2 space-y-2 pl-4 w-[120%]  absolute right-44 bg-white py-5 -top-1 transition-all duration-700">
                                            {apiSolutionItem.map((item, idx) => (
                                                <Link
                                                    to={item.path}
                                                    key={idx}
                                                    onClick={handleLinkClick}
                                                    className="block text-gray-700 cursor-pointer hover:text-blue-600"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-blue-600"
                                    onClick={handleLinkClick}
                                >
                                    {link.link}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="px-3">
                    <button
                        className="w-full border-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
