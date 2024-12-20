import React from "react";
import upibg11w from "../../assets/assets2/upibg11w.png";
import newupi from "../../assets/newupi.png";
import securew from "../../assets/assets2/securew.png";
import dashw from "../../assets/assets2/dashw.png"
import singlew from "../../assets/assets2/singlew.png"
import firstw from "../../assets/assets2/firstw.png"
import highw from "../../assets/assets2/highw.png";
import easyw from  "../../assets/assets2/easyw.png"

const UPICollectionApi = () => {
  return (
    <div className="lg:px-36">
      {/* Section 1 */}
      <section className="bg-gray-50 py-10 px-4 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">
              What is UPI Collection API
            </h1>
            <p className="text-gray-700 mb-4">
              The Unified Payments Interface (UPI) system in India offers a
              payment function called the UPI Collection API. It enables
              companies and merchants to collect payments from customers
              efficiently. Using a customized UPI payment link or QR code
              generated by a retailer, clients can make payments straight from
              their bank accounts.
            </p>
            <p className="text-gray-700">
              The UPI Collection API streamlines the payment process by doing
              away with the requirement for cash or card transactions. It
              provides a simple and safe way for companies to log transactions,
              accept payments, and reconcile payments in real-time.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={upibg11w} alt="UPI Background" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              UPI for Your Business by Rainet
            </h2>
            <p className="text-gray-700 mb-4">
              The service "UPI for Your Business by Rainet" is provided by
              Rainet, a business specializing in online payment options. With
              this service, businesses can use the Unified Payments Interface
              (UPI) system in India for their payment requirements.
            </p>
            <p className="text-gray-700">
              Businesses may use Rainet to create customized payment links or QR
              codes, track and reconcile transactions in real time, and
              integrate UPI payments.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={newupi} alt="New UPI" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Section 3 - Features */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            UPI Collection API Features
          </h2>
          <p className="text-gray-700 text-center mb-10">
            The UPI Collection API offers a range of features for seamless
            payment collection. Businesses can generate payment links and
            dynamic QR codes, simplifying the payment process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Easy Integrations",
                description:
                  "Seamlessly integrate with various platforms, enabling businesses to incorporate UPI payments into their infrastructure.",
                img: easyw,
              },
              {
                title: "High TPS",
                description:
                  "Handle high transaction volumes efficiently without performance issues or delays.",
                img: highw ,
              },
              {
                title: "First Reconciliation",
                description:
                  "Reconcile payments quickly and accurately for smooth transaction management.",
                img:firstw ,
              },
              {
                title: "Single Account",
                description:
                  "Manage all UPI payment services under a single account for centralized control.",
                img: singlew,
              },
              {
                title: "Secure",
                description:
                  "Robust security measures protect customer data and ensure safe transactions.",
                img: securew,
              },
              {
                title: "Dashboard",
                description:
                  "Access transaction tracking, analytics, and payment history in a user-friendly interface.",
                img: dashw,
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="mx-auto mb-4 w-16"
                />
                <h3 className="text-lg font-semibold text-blue-800">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mt-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UPICollectionApi;
