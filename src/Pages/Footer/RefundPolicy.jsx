import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 lg:px-36">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-blue-900">Refund Policy</h3>
        </div>
        <div className="space-y-8 text-blue-700">
          <section>
            <p>
              We have pledged to provide you world-class products and services for every single business you have made with us in the near past, or future, and as of now. We want you to have a hassle-free experience while you access the Paymine platform.
            </p>
            <p className="mt-4">
              We certify you about the quality and genuineness of the entire product and service range on the Paymine web portal. If you have any lack of contentment or grievances toward our product or services, we apologize, and you will be served with our Peace of Mind policy.
            </p>
          </section>

          <section>
            <h6 className="text-lg font-semibold text-blue-900">Unused Balance Clause</h6>
            <p className="mt-2">
              Any top-up payment or advance payment received from retailers or distributors deposited into their retail account, if unused, can be refunded. After one month of deposit, retailers need to submit a refund request. Upon receiving the request, the balance amount will be refunded within 15 to 20 working days via the same source.
            </p>
          </section>

          <section>
            <h6 className="text-lg font-semibold text-blue-900">Return and Exchange</h6>
            <p className="mt-2">
              Our entire Product and Service catalog is backed by a 3-day return and exchange policy in case of errors or mishaps during product placement. Products like Bus Tickets, Flight Tickets, Mobile & DTH Recharge, and Hotel Booking are only eligible for return and exchange if purchased directly from the Paymine web portal. Third-party products are not accepted under this policy.
            </p>
            <p className="mt-2">
              If someone has not received their product or service but has completed a transaction, they can reacquire the product or avail of another service of the same monetary value by contacting our support team.
            </p>
            <p className="mt-2">
              A request must be made within 3 days of acquisition via our official support email or helpline number to be eligible under the return and exchange policy.
            </p>
          </section>

          <section>
            <h6 className="text-lg font-semibold text-blue-900">Cancellation</h6>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                If you do not want to opt for the exchange and return policy and prefer a refund, you may cancel your product or service acquisition. Cancellation requests must comply with specific policy norms.
              </li>
              <li>
                Requests must be made within the stipulated time (up to 7 days, depending on the product or service).
              </li>
              <li>
                Mobile & DTH recharge, data card recharge, insurance payments, and utility bill payments are non-cancelable.
              </li>
              <li>
                Third-party product or service cancellations are not refundable.
              </li>
              <li>
                Requests must be made through our official support email or support center.
              </li>
              <li>
                It may take up to 7 days for the cancellation and refund process to be completed.
              </li>
              <li>
                You must stay in touch with your bank to track refunded amounts.
              </li>
            </ul>
          </section>

          <section>
            <h6 className="text-lg font-semibold text-blue-900">Note</h6>
            <p className="mt-2">
              All sales of Recharge are final, and no refunds or exchanges are permitted. If money is charged without delivering the Recharge, you may raise a complaint or contact customer care. Include details like the mobile or DTH account number, operator name, Recharge value, transaction date, and order number. Refunds will be processed within 7 working days after verification.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
