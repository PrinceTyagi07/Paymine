import React from 'react';
import image from "../../assets/AEPS.png";

const ABES = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Section 1 */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="lg:flex lg:items-center flex-row-reverse lg:space-x-14 ">
                        <div className="lg:w-1/2 flex justify-center lg:justify-end overflow-hidden">
                            <img
                                className="w-full max-w-md lg:max-w-lg  "
                                src={image}
                                alt="AEPS"
                            />
                        </div>
                        <div className="lg:w-1/2 mt-8 lg:mt-0">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Aadhaar Enabled Payment System for Banking Transactions
                            </h3>
                            <p className="text-justify mb-6">
                                Well, to start off, you need an Aadhaar payment app since it is an absolute
                                necessity in this industry. Owning an Aadhaar app without certain features wouldn’t
                                be a good idea. Therefore, you need a quality Aadhaar payment app with the following
                                features to maintain the product's quality:
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Integrated login and logout system.</li>
                                <li>MAC and IP-based security.</li>
                                <li>Data security with captcha and 3D verification.</li>
                                <li>Integrated OTP system.</li>
                                <li>No third-party API for secure transactions.</li>
                                <li>Fund management system integration.</li>
                                <li>Graphical report generation.</li>
                                <li>Email and SMS integration.</li>
                                <li>Fund addition and deduction system.</li>
                                <li>Compatibility across all devices.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Banking Services Offered by AEPS</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {["Cash Deposit", "Cash Withdrawal", "Balance Enquiry", "Mini Statement", "BHIM Aadhaar Pay", "Authentication", "Aadhaar to Aadhaar Fund Transfer"].map((service, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <p className="font-medium">{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect from a Top-Rated Software Company</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {["eKYC", "Best Finger Detection", "Demo Auth", "Tokenization", "Aadhaar Seeding Status"].map((feature, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <p className="font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">AEPS: The Future of Financial Transactions</h2>
                    <p className="text-justify mb-4">
                        Where time is money, the Aadhaar Empowered Payment System (AEPS) is a revolutionary payment
                        model that enables online interoperable financial transactions. AEPS is a bank-led model that
                        allows you to perform a range of financial transactions using Aadhaar verification.
                    </p>
                    <p className="text-justify">
                        The AEPS works through MicroATM terminals connected to the Aadhaar authentication server.
                        Once the authentication is successful, the transaction is processed, debiting or crediting
                        the customer's account accordingly.
                    </p>
                </div>
            </section>

            {/* Section 5 */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                        Why Choose Paymine Solutions for AEPS Integration?
                    </h2>
                    <p className="text-justify mb-4">
                        Paymine Solutions offers top-notch services including web design, development, B2B e-commerce
                        solutions, app development, and more. With a proven track record of delivering 500+ projects
                        worldwide, we ensure timely delivery, budget-friendly solutions, and innovative approaches.
                    </p>
                    <p className="text-justify">
                        Our team provides scalable and customizable solutions, leveraging the latest tools and APIs
                        for a future-proof product. Trust us for reliable and secure AEPS integration that aligns
                        with your business goals.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ABES;
