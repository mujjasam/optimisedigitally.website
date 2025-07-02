import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-800 p-12 rounded-2xl">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12 text-emerald-500" />
          </div>
          
          <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
          <p className="text-xl text-gray-400 mb-8">
            We've received your message and will get back to you within 24 hours. 
            Our team is excited to help you achieve your digital marketing goals.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center text-gray-300">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
              Message received successfully
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
              Our team will review your inquiry
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
              You'll hear from us within 24 hours
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition duration-300"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border-2 border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-white transition duration-300"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}