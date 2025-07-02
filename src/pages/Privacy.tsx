import React from 'react';

export default function Privacy() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-400">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              OPTIMISE DIGITALLY LTD ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company information</li>
              <li>Website usage data</li>
              <li>Cookie information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Cookies</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our website</li>
              <li>Analyze and improve our services</li>
              <li>Provide personalized content and advertisements</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. However, disabling cookies may limit your ability to use some features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Provide and improve our services</li>
              <li>Communicate with you</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze and improve our website performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
              <li>Manage your cookie preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our use of cookies, please contact us at:<br />
              Email: contact@optimisedigitally.com<br />
              Phone: +44 161 123 4567<br />
              Address: 123 Digital Lane, Manchester, M1 1AA, United Kingdom
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the effective date.
            </p>
          </section>

          <p className="text-sm mt-8">Last updated: March 2024</p>
        </div>
      </div>
    </div>
  );
}