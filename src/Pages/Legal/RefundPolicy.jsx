import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-225 mx-auto py-10 px-5">
      <h1 className="text-[32px] mb-5">Refund Policy</h1>
      <p className="leading-[1.7] mb-3">Last updated: January 2025</p>

      <p className="leading-[1.7] mb-3">
        At <strong>TasyHaat</strong>, we aim to ensure customer satisfaction.
        Since we deal with fresh and homemade food items, refunds are handled
        under specific conditions.
      </p>

      <h2 className="text-[22px] mt-7.5">Eligibility for Refund</h2>
      <ul>
        <li className="leading-[1.7] mb-3">Wrong item delivered</li>
        <li className="leading-[1.7] mb-3">
          Food was spoiled or unsafe upon arrival
        </li>
        <li className="leading-[1.7] mb-3">Order not delivered</li>
      </ul>

      <h2 className="text-[22px] mt-7.5">Non-Refundable Cases</h2>
      <ul>
        <li className="leading-[1.7] mb-3">
          Change of mind after order confirmation
        </li>
        <li className="leading-[1.7] mb-3">
          Delay caused by incorrect address or user unavailability
        </li>
        <li className="leading-[1.7] mb-3">Partially consumed food</li>
      </ul>

      <h2 className="text-[22px] mt-7.5">Refund Process</h2>
      <p className="leading-[1.7] mb-3">
        To request a refund, contact our support team within{" "}
        <strong>24 hours</strong> of delivery. Approved refunds will be
        processed within <strong>7 working days</strong>.
      </p>

      <h2 className="text-[22px] mt-7.5">Contact</h2>
      <p className="leading-[1.7] mb-3">Email: support@tasyhaat.com</p>
    </div>
  );
};

export default RefundPolicy;
