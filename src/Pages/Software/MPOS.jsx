import React from "react";
import mpos from "../../assets/software-mpos-single-banner.jpg";

const MPOS = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-10 lg:px-36">
      <div className="container mx-auto px-4">
        {/* Image Section */}
        <div className="flex justify-center mb-8">
          <img
            src={mpos}
            alt="MPOS Machine"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Heading */}
        <h3 className="text-2xl font-bold text-blue-700 text-center mb-6">
          WHAT IS MPOS MACHINE?
        </h3>

        {/* Content Section */}
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            <strong>MPOS (Mobile POS)</strong> describes a mobile point-of-sale
            system that combines hardware and software. It is an electronic
            device used by retailers for in-store transactions. Nowadays, MPOS
            machines have become an integral component of businesses due to
            their cashless transaction capabilities. They are primarily used in
            retail shops, grocery stores, food outlets, and the beverage
            industry, enabling customers to pay using credit or debit cards.
          </p>
          <p className="mb-4">
            Sonitecho is the best choice for MPOS solutions. We bring together
            technical and business expertise necessary to make the e-commerce
            migration a reality. We work to deliver the latest innovations and
            solutions as per market conditions. Our team ensures timely project
            implementation within budget while aligning with business
            objectives.
          </p>

          {/* List Section */}
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              The merchant or vendor swipes the customer's credit or debit card
              through the MPOS machine.
            </li>
            <li className="mb-2">
              The MPOS machine, acting as a card reader, scans the card's bar
              code.
            </li>
            <li className="mb-2">
              The buyer enters their PIN code to authorize the transaction.
            </li>
            <li className="mb-2">
              The input data is sent to a central regulatory account for
              verification.
            </li>
            <li className="mb-2">
              Upon successful verification, the amount is transferred to the
              vendor's account, and a receipt is generated.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MPOS;
