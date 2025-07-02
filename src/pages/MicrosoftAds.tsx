import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Zap, CheckCircle, BarChart, Globe, Star, Award, DollarSign, Clock, Shield } from 'lucide-react';

export default function MicrosoftAds() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-red-900/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Microsoft Advertising Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unlock Premium Audiences with<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Microsoft Ads Power
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Reach high-value customers on Bing, Yahoo, and Microsoft's partner network. 
              Access unique audiences with higher purchasing power and lower competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition duration-300"
              >
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
              >
                Free Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Microsoft Ads Advantage</h2>
            <p className="text-gray-400">Tap into a premium audience with exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-2">691M</div>
              <p className="text-gray-400">Monthly Unique Users</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">33%</div>
              <p className="text-gray-400">Higher Income Audience</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <p className="text-gray-400">Lower Competition</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">36%</div>
              <p className="text-gray-400">Desktop Market Share</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Microsoft Ads Delivers Superior Results</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access premium audiences and achieve better ROI with Microsoft's advertising platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-2xl backdrop-blur-sm border border-orange-500/20">
              <Users className="h-12 w-12 text-orange-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Premium Audience Quality</h3>
              <p className="text-gray-400 mb-6">
                Reach affluent, educated professionals with higher purchasing power and decision-making authority in their organizations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                  Higher income demographics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                  Business decision makers
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                  Professional audiences
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-red-900/20 to-purple-900/20 rounded-2xl backdrop-blur-sm border border-red-500/20">
              <DollarSign className="h-12 w-12 text-red-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Lower Cost Competition</h3>
              <p className="text-gray-400 mb-6">
                Benefit from reduced competition and lower cost-per-click rates while maintaining high-quality traffic and conversions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                  Reduced bidding competition
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                  Better cost efficiency
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                  Higher ROI potential
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <Shield className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Enterprise Integration</h3>
              <p className="text-gray-400 mb-6">
                Leverage Microsoft's ecosystem integration with Office 365, LinkedIn, and Windows for enhanced targeting capabilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  LinkedIn profile targeting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Office 365 integration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Advanced audience insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Complete Microsoft Ads Solutions</h2>
            <p className="text-gray-400">End-to-end campaign management for maximum impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Strategic Planning',
                description: 'Comprehensive campaign strategies designed for Microsoft Ads ecosystem'
              },
              {
                icon: Globe,
                title: 'Multi-Platform Reach',
                description: 'Bing, Yahoo, AOL, and Microsoft partner network coverage'
              },
              {
                icon: BarChart,
                title: 'Advanced Analytics',
                description: 'Deep insights and performance tracking across all touchpoints'
              },
              {
                icon: Clock,
                title: 'Continuous Optimization',
                description: 'Ongoing campaign refinement for sustained performance growth'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-900 rounded-xl hover:transform hover:scale-105 transition duration-300">
                <feature.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Microsoft Ads Success Stories</h2>
            <p className="text-gray-400">Real results from our Microsoft Ads campaigns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                <div>
                  <h3 className="font-bold">B2B Software</h3>
                  <p className="text-gray-400 text-sm">Enterprise Solutions</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lead Quality:</span>
                  <span className="text-green-400 font-bold">+420%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost Per Lead:</span>
                  <span className="text-orange-400 font-bold">-55%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Conversion Rate:</span>
                  <span className="text-purple-400 font-bold">+280%</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                "Microsoft Ads connected us with enterprise decision-makers we couldn't reach elsewhere. The quality of leads is exceptional."
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-orange-400 mr-3" />
                <div>
                  <h3 className="font-bold">Financial Services</h3>
                  <p className="text-gray-400 text-sm">Investment Firm</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Client Acquisition:</span>
                  <span className="text-green-400 font-bold">+310%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Average Deal Size:</span>
                  <span className="text-orange-400 font-bold">+180%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ROI Improvement:</span>
                  <span className="text-purple-400 font-bold">+450%</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                "The affluent audience on Microsoft Ads perfectly matches our target demographic. Results exceeded all expectations."
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-red-400 mr-3" />
                <div>
                  <h3 className="font-bold">Healthcare Technology</h3>
                  <p className="text-gray-400 text-sm">Medical Devices</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Professional Reach:</span>
                  <span className="text-green-400 font-bold">+380%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Qualified Inquiries:</span>
                  <span className="text-orange-400 font-bold">+240%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sales Pipeline:</span>
                  <span className="text-purple-400 font-bold">+320%</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                "Microsoft Ads helped us reach healthcare professionals and decision-makers with precision targeting and excellent results."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Access Premium Audiences?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Launch your Microsoft Ads campaign today and connect with high-value customers who are ready to invest in your solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition duration-300"
            >
              Get Free Analysis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}