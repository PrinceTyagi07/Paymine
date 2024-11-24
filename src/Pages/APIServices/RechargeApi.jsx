import React from 'react';
import recharge from "../../assets/Recharge-api.png"
const RechargeApi = () => {
  return (
    <div className="px-4 py-8 lg:px-36 bg-blue-50">
      <div className="service-details space-y-6">
        <div className="image-box text-center">
          <img
            src={recharge}
            alt="Recharge API"
            className="w-full md:w-2/3 mx-auto rounded-lg shadow"
          />
        </div>
        <div className="content space-y-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900">Mobile Recharge API</h3>
          <div className="text space-y-4">
            <p className="text-sm md:text-base text-blue-700">
              Mobile Recharge API will provide you with the power to provide online, easy recharge to your customers for
              major mobile operators like Airtel, Aircel, BSNL, Idea, and more. Online bill payment facility can be
              available for Postpaid mobile bills and energy bills.
            </p>
            <p className="text-sm md:text-base text-blue-700">
              We provide master Mobile Recharge <strong>API Development solution</strong> in India. Any company can
              start its own API business in India if any API development was required by any mobile recharge company
              using a master API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeApi;
