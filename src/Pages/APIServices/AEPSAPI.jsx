import React from 'react';
import aeps from "../../assets/assets2/apiw.png";
const AEPSAPI = () => {
  return (
    <div className="px-4 py-8 lg:px-36">
      <div className="content text-center space-y-6">
        <h3 className="text-xl md:text-2xl text-blue-900 font-bold">AADHAAR ENABLED PAYMENT SYSTEM FOR BANKING TRANSACTIONS</h3>
        <div className="text space-y-4">
          <p className="text-sm md:text-base text-blue-700">
            Paymine Solution it solution offers you just about the most highly demanded features nowadays. Our Aadhar
            Card Enrolment boost API works to help you through making and update Aadhar Card.All major airline services
            are classified by Softcare Infotech. The UIDAI's mandate is to issue every resident an exceptional
            identification number of this particular resident's demographic and biometric information, they will are
            able to use to distinguish themselves around India and access a host of benefits and service.
          </p>
          <img src={aeps} alt="AEPS API" className="w-full md:w-2/3 mx-auto rounded-lg shadow" />
          <p className="text-sm md:text-base text-blue-700">
            The UIDAI proposes to provide online authentication using demographic and biometric data. The API provides
            authentication services to residents making requests for government agency services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AEPSAPI;
