import React from 'react';
import pancard from "../../assets/pancard-api.jpg";
const PANApi = () => {
  return (
    <div className="px-4 py-8 lg:px-36">
      <div className="content space-y-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-blue-900">Pan Card API</h3>
        <div className="text space-y-4">
          <p className="text-sm md:text-base text-blue-700">
            3rd Party API Integration A credit application-programming interface (API) is a collection of programming
            instructions and standards for accessing an internet-based software application or Web tool. A software
            program company releases its API to the public to ensure that other software developers can design products
            which are powered by its service.
          </p>
          <img src={pancard} alt="PAN API" className="w-full md:w-2/3 mx-auto rounded-lg shadow" />
          <p className="text-sm md:text-base text-blue-700">
            The Paymine Solution it solution is one of the best pan card verification API provider Company. We provide
            you the best Pan card verification API. You can use this PAN card verification API in your web portal and
            provide PAN verification service to your client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PANApi;
