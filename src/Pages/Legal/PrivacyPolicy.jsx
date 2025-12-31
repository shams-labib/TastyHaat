import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-225 mx-auto py-10 px-5">
      <h1 className="text-[32px] mb-5">Privacy Policy</h1>
      <p className="leading-[1.7] mb-3">Last updated: January 2025</p>

      <p className="leading-[1.7] mb-3">
        TasyHaat respects your privacy and is committed to protecting your
        personal data.
      </p>

      <h2 className="text-[22px] mt-7.5">Information We Collect</h2>
      <ul>
        <li className="leading-[1.7] mb-3">
          Name, phone number, email address
        </li>
        <li className="leading-[1.7] mb-3">Delivery address</li>
        <li className="leading-[1.7] mb-3">
          Payment details (secured via third-party providers)
        </li>
      </ul>

      <h2 className="text-[22px] mt-7.5">How We Use Your Information</h2>
      <ul>
        <li className="leading-[1.7] mb-3">To process orders and payments</li>
        <li className="leading-[1.7] mb-3">To communicate order updates</li>
        <li className="leading-[1.7] mb-3">To improve our services</li>
      </ul>

      <h2 className="text-[22px] mt-7.5">Data Security</h2>
      <p className="leading-[1.7] mb-3">
        We use industry-standard security measures to protect your data.
        However, no online platform is 100% secure.
      </p>

      <h2 className="text-[22px] mt-7.5">Third-Party Services</h2>
      <p className="leading-[1.7] mb-3">
        We may share limited information with delivery partners and payment
        gateways only for order fulfillment.
      </p>

      <h2 className="text-[22px] mt-7.5">Contact Us</h2>
      <p className="leading-[1.7] mb-3">Email: privacy@tasyhaat.com</p>
    </div>
  );
};

export default PrivacyPolicy;
