import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4 lg:px-36">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-900">Privacy Policy</h3>
      </div>
      <div className="space-y-8">
        <section>
          <h6 className="text-lg font-semibold mb-2 text-blue-900">1. Introduction</h6>
          <p className="text-blue-700">
            Paymine Solutions Private Limited ("Paymine", "us", "we", or "our") is committed to maintaining the confidentiality, integrity, and security of any personal information of our users. This Privacy Policy ("Policy") applies to those who visit our website 
            <a href="https://clickpe.in" className="text-blue-500 hover:underline"> https://clickpe.in</a> ("Website"), as well as users of our platform, tools, and services offered by Paymine ("Service"). If you have questions or complaints regarding our privacy policy or practices, please contact us at 
            <a href="mailto:info@click-pe.in" className="text-blue-500 hover:underline"> info@click-pe.in</a>.
          </p>
          <p className="text-blue-700 mt-2">
            By visiting the Website and/or utilizing any Services offered by Paymine, you agree to and accept our terms of use governing your use of the Website and/or utilizing any Services offered by Paymine, which may be amended from time to time.
          </p>
        </section>

        <section>
          <h6 className="text-lg font-semibold mb-2 text-blue-900">2. Definitions</h6>
          <p className="text-blue-700">
            In this Policy: (i) capitalized terms defined by inclusion in quotations and/or parenthesis have the meanings so ascribed; and (ii) the following terms shall have the following meanings assigned to them herein below:
          </p>
          <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
            <li>
              <strong>"Applicable Law"</strong> includes all applicable Indian statutes, enactments, acts of the state legislature or parliament, laws, ordinances, rules, bye-laws, regulations, notifications, guidelines, and more.
            </li>
            <li>
              <strong>"Company"</strong> / "Us" / "We" / "Our" shall mean Paymine Solutions Private Limited, a private limited company registered under the Companies Act, 2013.
            </li>
            <li>
              <strong>"Paymine account/E-ledger"</strong> shall mean the access account created by a User to avail Services on the Website and/or Platform.
            </li>
          </ul>
        </section>

        <section>
          <h6 className="text-lg font-semibold mb-2 text-blue-900">3. Information Collection and Use</h6>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>We may collect your Personal Information when you submit information while creating your Paymine Account on the Platform.</li>
            <li>Personal Information is used to improve the Platform and/or Service. We do not share your Personal Information with third parties for commercial use.</li>
            <li>We ensure that third-party service providers maintain strict confidentiality of your Personal Information.</li>
          </ul>
          <p className="text-blue-700 mt-2">
            Paymine uses your personal information and sensitive personal information to enhance the operation of this site and respond to your requests for information. We may contact you about new features or services.
          </p>
        </section>

        <section>
          <h6 className="text-lg font-semibold mb-2 text-blue-900">4. Log Files</h6>
          <p className="text-blue-700">
            We may use IP addresses to analyze usage, administer our site, and gather demographic information for aggregate use.
          </p>
        </section>

        <section>
          <h6 className="text-lg font-semibold mb-2 text-blue-900">5. Accuracy and Completeness of Information</h6>
          <p className="text-blue-700">
            You represent and warrant that you shall be responsible for the accuracy and correctness of all User Information provided by you for creating a Paymine Account and for accessing any Services available on the Platform.
          </p>
        </section>

        <section>
          <h6 className="text-lg font-semibold mb-2 text-blue-900">6. Representations and Warranties</h6>
          <p className="text-blue-700">
            By creating a Paymine Account, you represent that you are at least the age of majority in your state or province of residence.
          </p>
          <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
            <li>You shall not violate any Applicable Laws in your jurisdiction while using the Service.</li>
            <li>Use of the Platform requires internet and/or mobile connectivity, and you bear the costs incurred for such access.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
