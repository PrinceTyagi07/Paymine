import React from 'react';
import assets from "../../assets/app-developer.jpg";

const Software = () => {
  return (
    <div className="bg-gray-50 text-gray-800 lg:px-36">
      {/* Header Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-blue-700">
              Top Android App Development Company - Paymine Solutions
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Turn your vision into reality with our exceptional Android mobile app development services. Paymine Solution Pvt. Ltd. is a prominent Android app development company delivering fully customized and user-friendly applications. With years of experience, our team of experts has the proficiency to transform any app concept into a fully functional Android application. Choose Paymine Solution for high-quality and cost-effective Android app development services.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={assets} 
              alt="Android App Development Service by Paymine Solution Private Limited" 
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Android App Development Section */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Kinds of Android Apps We Develop</h2>
            <p className="text-lg leading-relaxed">
              Take your business to new heights with our innovative Android mobile app development solutions. We combine cutting-edge development techniques with innovative ideas to deliver world-changing Android applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">E-commerce Apps</h3>
              <p>
                Seamlessly designed apps that provide a superior shopping experience and boost customer engagement.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Social Media Apps</h3>
              <p>
                Cutting-edge apps for seamless user interaction and connectivity.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Enterprise Apps</h3>
              <p>
                Apps that streamline business processes and enhance productivity.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Gaming Apps</h3>
              <p>
                Engaging and interactive apps designed for unique gaming experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Why Choose Paymine Solutions?</h2>
          <p className="text-lg leading-relaxed">
            We provide tailor-made Android app development solutions that align with your business objectives. Here's why you should choose us:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-blue-600 mb-2">Expertise</h3>
            <p>
              Experienced developers proficient in transforming concepts into functional apps.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-blue-600 mb-2">Latest Technology</h3>
            <p>
              Apps developed using the latest SDKs, ensuring responsiveness across devices.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-blue-600 mb-2">Cost-effective</h3>
            <p>
              Affordable solutions without compromising on quality.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-blue-600 mb-2">Customer Support</h3>
            <p>
              Dedicated support team available 24/7 for all queries and assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
