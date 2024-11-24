import React from 'react';

const TermsConditions = () => {
  return (
    <div className="bg-gray-100 py-8 ">
      <div className="container mx-auto px-4 lg:px-36">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-blue-900">Terms and Conditions</h3>
        </div>
        <div className="space-y-8 text-blue-700">
          <section>
            <p>
              Your website may use the Terms and Conditions given below. The terms “We” / “Us” / “Our”/”Company” individually and collectively refer to **Paymine** and the terms “Visitor” / “User” refer to the users. This page states the Terms and Conditions under which you (Visitor) may visit this website (“paymine.in”). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site. The business, any of its business divisions, and/or its subsidiaries, associate companies, or subsidiaries to subsidiaries reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions because they are binding on all users of this Website.
            </p>
          </section>

          <section>
            <h5 className="text-lg font-semibold text-blue-900">Use of Content</h5>
            <p className="mt-2 text-blue-700">
              All logos, brands, marks, headings, labels, names, signatures, numerals, shapes, or any combinations thereof, appearing on this site, except as otherwise noted, are properties either owned or used under license by the business and/or its associate entities who feature on this Website.
            </p>
            <p className="mt-2 ">
              The use of these properties or any other content on this site, except as provided in these terms and conditions, is strictly prohibited. You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials for any public or commercial purpose without written permission.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-blue-900">Acceptable Website Use</h3>
            <h6 className="text-lg font-semibold text-blue-900 mt-4">Security Rules</h6>
            <p className="mt-2">
              Visitors are prohibited from violating or attempting to violate the security of the Website, including but not limited to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Accessing data not intended for such users or logging into unauthorized servers or accounts.</li>
              <li>Attempting to probe, scan, or test system vulnerabilities or breach security without authorization.</li>
              <li>Interfering with service via overloading, "mail bombing," or "crashing."</li>
              <li>Sending unsolicited electronic mail, including promotions or advertisements of products or services.</li>
            </ul>
            <p className="mt-2">
              Violations of system or network security may result in civil or criminal liability. Paymine reserves the right to investigate such violations and cooperate with law enforcement authorities in prosecuting users involved.
            </p>
          </section>

          <section>
            <h6 className="text-lg font-semibold text-blue-900">General Rules</h6>
            <p className="mt-2">
              Visitors may not use the Website to transmit, distribute, store, or destroy material that:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Encourages conduct constituting a criminal offense or violation of law.</li>
              <li>Infringes intellectual property rights or violates personal privacy.</li>
              <li>Is defamatory, obscene, threatening, or abusive.</li>
            </ul>
          </section>

          <section>
            <h6 className="text-lg font-semibold text-blue-900">Indemnity</h6>
            <p className="mt-2">
              Users agree to indemnify and hold harmless Paymine, its officers, directors, employees, and agents against any claims, actions, demands, liabilities, or losses arising from their use of the platform or breach of the terms.
            </p>
          </section>

          <section>
            <h6 className="text-lg font-semibold text-blue-900">Liability</h6>
            <p className="mt-2">
              Users agree that Paymine and its affiliates are not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the service, unauthorized access to or alteration of transmissions, or other matters related to the service.
            </p>
          </section>

          <section>
            <h6 className="text-lg font-semibold text-blue-900">Disclaimer of Consequential Damages</h6>
            <p className="mt-2">
              In no event shall Paymine or associated entities be liable for damages resulting from the use or inability to use the Website or materials, including but not limited to incidental and consequential damages, lost profits, or data loss.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
