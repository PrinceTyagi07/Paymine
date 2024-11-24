import React from "react";
import feature from "../../assets/feature.jpg";
import customers from "../../assets/customers.jpg";

const PANServices = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-10 lg:px-36">
      {/* Objective Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Objective</h3>
            <ul className="list-disc pl-6 text-lg leading-relaxed">
              <li className="mb-2">
                The primary objective of PAN is to use a universal
                identification key to track financial transactions that might
                have a taxable component to prevent tax evasion.
              </li>
              <li className="mb-2">
                The PAN number remains unaffected by a change of address
                throughout India.
              </li>
              <li className="mb-2">
                It is important when paying income tax, receiving tax refunds,
                and receiving communication from the Income Tax Department.
              </li>
              <li className="mb-2">
                PAN Card also serves as a proof of identity.
              </li>
            </ul>
          </div>

          {/* Image */}
          <div>
            <img
              src={feature}
              alt="Feature Image"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="my-10"></div>

      {/* Benefits Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img
              src={customers}
              alt="Customers Image"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Benefits To Customer
            </h3>
            <ul className="list-disc pl-6 text-lg leading-relaxed">
              <li className="mb-2">Help in Income Tax Returns (ITR)</li>
              <li className="mb-2">Opening your bank accounts</li>
              <li className="mb-2">
                Transactions exceeding Rs 50,000
              </li>
              <li className="mb-2">For registering a business</li>
              <li className="mb-2">Easy foreign transactions</li>
              <li className="mb-2">
                Documentary proof of identity for any individual.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PANServices;
