import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Mail } from 'lucide-react';

export default function Subscribe() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-800 p-12 rounded-2xl">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="h-12 w-12 text-blue-500" />
          </div>
          
          <h1 className="text-4xl font-bold mb-6">Thanks for Subscribing!</h1>
          <p className="text-xl text-gray-400 mb-8">
            You're now part of our community! We'll keep you updated with the latest 
            digital marketing insights, industry trends, and exclusive tips to help 
            your business grow.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center text-gray-300">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              Subscription confirmed
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              Weekly insights delivered to your inbox
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
              Exclusive tips and strategies
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
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