import React from "react";
import Recharge from "../../assets/Recharge-api.png";

const RechargeSoftware = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-10 lg:px-36">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
          MOBILE RECHARGE SOFTWARE DEVELOPMENT B2B, B2C AND WHITE LABEL
        </h3>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-56  items-center">
          {/* Text Content */}
          <div className="lg:w-[130%]">
            <p className="text-lg leading-relaxed mb-4">
              Mobiles have grown to be an essential part of our lives, and the
              same goes for mobile recharge. With the sudden advancement in
              technology, the internet enables us to complete various tasks
              which were previously unattainable. One particular instance is
              online mobile recharge.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Avail seamless &amp; quick facility online at our website and lose
              focus on the old troublesome offline process. With this website,
              you can do easy recharge online anytime and everywhere, whether it
              be from your home, office, holiday, or travelling.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              For all-in-one recharge solutions, you can reach Paymine Solution,
              which can help you to get your multi-recharge system done at a
              very low price.
            </p>
            <p className="text-lg leading-relaxed">
              It is easy to start your own mobile recharge business with your
              own brand name. All-in-one Recharge helps you maintain users
              easily and quickly.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={Recharge}
              alt="Recharge Software"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-10">
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
            Our multi-recharge software or all-in-one recharge software comes
            with these features:
          </h3>
          <ul className="list-disc pl-6 text-lg leading-relaxed">
            <li className="mb-2">All-in-one recharge API</li>
            <li className="mb-2">All-in-one recharge in Single Sim</li>
            <li className="mb-2">Multi-sim modem</li>
            <li className="mb-2">Single sim multi-recharge facility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RechargeSoftware;
