import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Globe, Users, Megaphone, Search, PenTool, CheckCircle, Clock, Zap, Check } from 'lucide-react';

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-400">
              Comprehensive digital solutions to help your business grow
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Choose a plan that works for you</h2>
            <p className="text-xl text-gray-400">
              Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Starter Plan */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">STARTER</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">$9</span>
                  <span className="text-gray-400 ml-2">/ mo</span>
                </div>
                <p className="mt-4 text-gray-400">
                  Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>3 Social Media Account</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>Free Platform Access</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full py-3 px-6 bg-gray-800 text-white text-center rounded-lg hover:bg-gray-700 transition duration-300"
              >
                REGISTER
              </Link>
            </div>

            {/* Business Plan */}
            <div className="bg-black rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">BUSINESS</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-emerald-400">$29</span>
                  <span className="text-gray-400 ml-2">/ mo</span>
                </div>
                <p className="mt-4 text-gray-400">
                  Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>3 Social Media Account</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>Free Platform Access</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full py-3 px-6 bg-white text-black text-center rounded-lg hover:bg-gray-100 transition duration-300"
              >
                REGISTER
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3" />
                  <h3 className="text-xl font-bold">Search Engine Optimization</h3>
                </div>
                <p className="text-gray-400 ml-9">
                  Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3" />
                  <h3 className="text-xl font-bold">Social Media Strategy</h3>
                </div>
                <p className="text-gray-400 ml-9">
                  Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3" />
                  <h3 className="text-xl font-bold">Real Time and Data</h3>
                </div>
                <p className="text-gray-400 ml-9">
                  Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800"
                  alt="Technology"
                  className="w-full rounded-2xl"
                />
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-gray-900">Stay Current With Technology</h3>
                  <Link
                    to="/contact"
                    className="inline-block mt-4 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition duration-300"
                  >
                    ANALYZE YOUR SITE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-900">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Social Marketing Strategy</h3>
              <p className="text-gray-400 mb-6">
                The first step is to clearly define the social issue or problem you want to address.
              </p>
              <Link to="/contact" className="inline-flex items-center text-emerald-500 hover:text-emerald-400">
                MORE INFO <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-gray-900">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Marketing Development</h3>
              <p className="text-gray-400 mb-6">
                Start by setting clear and specific goals for your digital marketing efforts.
              </p>
              <Link to="/contact" className="inline-flex items-center text-blue-500 hover:text-blue-400">
                MORE INFO <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-gray-900">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reporting and Analysis</h3>
              <p className="text-gray-400 mb-6">
                Analyze your digital marketing performance data to refine your strategies.
              </p>
              <Link to="/contact" className="inline-flex items-center text-orange-500 hover:text-orange-400">
                MORE INFO <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8">Get in touch with us today to discuss your project</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-emerald-600 transition duration-300"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}