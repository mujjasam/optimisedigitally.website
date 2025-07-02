import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Zap, CheckCircle, BarChart, Globe, Star, Award, DollarSign, Clock } from 'lucide-react';

export default function GoogleAds() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Google Ads Certified Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maximize Your ROI with<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Google Ads Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Drive qualified traffic, increase conversions, and grow your business with our data-driven Google Ads strategies. 
              Get more customers at a lower cost per acquisition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
              >
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Proven Results That Drive Growth</h2>
            <p className="text-gray-400">Our Google Ads expertise delivers measurable success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">63M+</div>
              <p className="text-gray-400">Monthly Searches Reached</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <p className="text-gray-400">Lower Cost Per Click</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">250%</div>
              <p className="text-gray-400">Average ROI Increase</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <p className="text-gray-400">Successful Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Google Ads Platform</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the power of expertly managed Google Ads campaigns that deliver real results for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl backdrop-blur-sm border border-blue-500/20">
              <DollarSign className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Cost-Effective Advertising</h3>
              <p className="text-gray-400 mb-6">
                Maximize your advertising budget with optimized bidding strategies and precise targeting that reduces waste and increases ROI.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Smart bidding optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Budget allocation strategies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Performance monitoring
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <Target className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Precision Targeting</h3>
              <p className="text-gray-400 mb-6">
                Reach your ideal customers with advanced targeting options including demographics, interests, and behavioral patterns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Audience segmentation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Geographic targeting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Device optimization
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl backdrop-blur-sm border border-green-500/20">
              <BarChart className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Real-Time Analytics</h3>
              <p className="text-gray-400 mb-6">
                Make data-driven decisions with comprehensive reporting and real-time performance insights that drive continuous improvement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Conversion tracking
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Performance dashboards
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Custom reporting
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
            <h2 className="text-3xl font-bold mb-4">Complete Google Ads Management</h2>
            <p className="text-gray-400">Full-service campaign management from strategy to optimization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Campaign Strategy',
                description: 'Custom strategies tailored to your business goals and target audience'
              },
              {
                icon: Globe,
                title: 'Keyword Research',
                description: 'In-depth keyword analysis to identify high-converting search terms'
              },
              {
                icon: BarChart,
                title: 'Performance Optimization',
                description: 'Continuous monitoring and optimization for maximum ROI'
              },
              {
                icon: Clock,
                title: '24/7 Monitoring',
                description: 'Round-the-clock campaign monitoring and performance adjustments'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-900 rounded-xl hover:transform hover:scale-105 transition duration-300">
                <feature.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
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
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400">Real results from our Google Ads campaigns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                <div>
                  <h3 className="font-bold">E-commerce Store</h3>
                  <p className="text-gray-400 text-sm">Fashion Retailer</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">ROI Increase:</span>
                  <span className="text-green-400 font-bold">+340%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost Reduction:</span>
                  <span className="text-blue-400 font-bold">-45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Conversion Rate:</span>
                  <span className="text-purple-400 font-bold">+180%</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                "Our Google Ads campaigns transformed our online sales. The team's expertise in targeting and optimization delivered exceptional results."
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <h3 className="font-bold">SaaS Company</h3>
                  <p className="text-gray-400 text-sm">B2B Software</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lead Quality:</span>
                  <span className="text-green-400 font-bold">+220%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CPA Reduction:</span>
                  <span className="text-blue-400 font-bold">-60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Revenue Growth:</span>
                  <span className="text-purple-400 font-bold">+150%</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                "The strategic approach to our Google Ads campaigns significantly improved our lead generation and customer acquisition."
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-400 mr-3" />
                <div>
                  <h3 className="font-bold">Local Business</h3>
                  <p className="text-gray-400 text-sm">Professional Services</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Local Visibility:</span>
                  <span className="text-green-400 font-bold">+400%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone Calls:</span>
                  <span className="text-blue-400 font-bold">+280%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">New Customers:</span>
                  <span className="text-purple-400 font-bold">+190%</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                "Local Google Ads campaigns brought us more qualified leads than we ever imagined possible. Outstanding service!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dominate Google Search?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your high-converting Google Ads campaign today and watch your business grow with qualified traffic and increased sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Launch Your Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}