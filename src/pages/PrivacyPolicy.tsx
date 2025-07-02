import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Quirky Creative Studio Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company information</li>
              <li>Messages and correspondence</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you</li>
              <li>Send you marketing and promotional materials</li>
              <li>Analyze and improve our website performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: contact@quirkycreativestudio.online<br />
              Phone: +44 20 7123 4567<br />
              Address: 17 Green Lanes, London, England, N16 9BS
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;