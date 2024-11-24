import React from "react";
import electricity from "../../assets/electricity.png";
import water from "../../assets/water.png";
import gas from "../../assets/gas.png";
import landline from "../../assets/landline.png";
import mobile from "../../assets/mobile.png";
import dth from "../../assets/dth.png";
import broadband from "../../assets/broadband.png";
import fastag from "../../assets/fastag.png";

const BBPS = () => {
  return (
    <div className="bg-gray-50 text-gray-800 lg:px-36">
      {/* Introduction Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-lg leading-relaxed">
              BBPS is an integrated bill payment system that offers interoperable bill payment services to customers online and offline. Pay through multiple modes such as net banking, credit cards, debit cards, e-wallets, or cash (offline mode) and get instant confirmation. Verify your online transaction status using your mobile number or transaction reference ID.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <div className="container mx-auto py-10 px-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          BHARAT BILL PAYMENT SYSTEM (BBPS)
        </h3>
        <p className="mb-4 leading-relaxed">
          The Bharat Bill Payment System makes utility bill payments comfortable and handy. It collects payments for services like electricity, water, gas, and telephone bills, along with other payments such as school fees, insurance premiums, and taxes, as notified by the RBI.
        </p>
        <p className="mb-4 leading-relaxed">
          BBPS ensures secure transactions for various utility payments via online and offline methods. You can pay using debit/credit cards, e-wallets, net banking, or cash, and get instant confirmation.
        </p>

        <h3 className="text-2xl font-bold text-blue-700 mt-10 mb-6 text-center">
          CATEGORY OF BILLERS IN BBPS
        </h3>
        <p className="mb-4 leading-relaxed">
          BBPS outlets include banks, ATMs, business correspondents, and kiosks. Payments are processed securely via the NPCI system, providing instant receipts. This platform supports various delivery channels, including self-service, agent-assisted, and digital modes.
        </p>
        <p className="mb-4 leading-relaxed">
          The API interface integrates seamlessly with the BBPS's central unit, ensuring smooth and reliable service.
        </p>
      </div>

      {/* Services Section */}
      <section className="bg-white py-10 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
            All Services
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <img src={electricity} alt="Electricity" className="w-24 mb-4" />
              <h5 className="text-lg font-medium">Electricity</h5>
            </div>
            <div className="flex flex-col items-center">
              <img src={water} alt="Water" className="w-24 mb-4" />
              <h5 className="text-lg font-medium">Water</h5>
            </div>
            <div className="flex flex-col items-center">
              <img src={gas} alt="Gas" className="w-24 mb-4" />
              <h5 className="text-lg font-medium">Gas</h5>
            </div>
            <div className="flex flex-col items-center">
              <img src={landline} alt="Landline" className="w-24 mb-4" />
              <h5 className="text-lg font-medium">Landline</h5>
            </div>
            <div className="flex flex-col items-center">
              <img src={mobile} alt="Mobile" className="w-24 mb-4" />
              <h5 className="text-lg font-medium">Mobile</h5>
            </div>
            <div className="flex flex-col items-center">
              <img src={broadband} alt="Broadband" className="w-24 mb-4" />
              <h5 className="text-lg font-medium">Broadband</h5>
            </div>
            <div className="flex flex-col items-center">
              <img src={dth} alt="DTH" className="w-24 mb-4" />
              <h5 className="text-lg font-medium">DTH</h5>
            </div>
            <div className="flex flex-col items-center">
              <img src={fastag} alt="Fastag" className="w-24 mb-4" />
              <h5 className="text-lg font-medium">Fastag</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BBPS;
