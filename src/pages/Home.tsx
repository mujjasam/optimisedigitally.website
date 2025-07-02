import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award, BarChart, Users, Target, CheckCircle, Search, Globe, PenTool, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Newsletter signup:', email);
    // Redirect to subscribe thank you page
    navigate('/subscribe');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000"
            alt="Digital Marketing Team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Most Creatively<br />
              Designed Solutions<br />
              For Your Business
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Transform your digital presence with our innovative marketing strategies
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Gradient Arrows */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-emerald-400 transform rotate-45" />
                <span className="text-4xl font-bold text-white ml-2">+130%</span>
              </div>
              <p className="text-gray-400">Conversion Rate Increased</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-purple-400 transform rotate-45" />
                <span className="text-4xl font-bold text-white ml-2">+150K</span>
              </div>
              <p className="text-gray-400">Monthly Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-orange-400 transform rotate-45" />
                <span className="text-4xl font-bold text-white ml-2">+15K</span>
              </div>
              <p className="text-gray-400">Active Followers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Gradient Cards */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wide">OUR SERVICES</span>
            <h2 className="mt-2 text-3xl font-bold text-white">Our Digital Services to<br />build Your Brand</h2>
            <p className="mt-4 text-xl text-gray-400">
              Comprehensive digital solutions tailored to elevate your brand presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100/20 to-emerald-400/20 p-8 transition-all duration-300 hover:shadow-lg">
              <div className="relative z-10">
                <Search className="h-12 w-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">SEO Consultancy</h3>
                <p className="text-gray-400 mb-6">
                  Expert SEO strategies to improve your search rankings and drive organic traffic
                </p>
                <Link to="/services" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
                  MORE INFO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100/20 to-pink-400/20 p-8 transition-all duration-300 hover:shadow-lg">
              <div className="relative z-10">
                <PenTool className="h-12 w-12 text-pink-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Design & Development</h3>
                <p className="text-gray-400 mb-6">
                  Creative web solutions that combine aesthetics with functionality
                </p>
                <Link to="/services" className="inline-flex items-center text-pink-400 hover:text-pink-300">
                  MORE INFO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100/20 to-purple-400/20 p-8 transition-all duration-300 hover:shadow-lg">
              <div className="relative z-10">
                <BarChart className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Reporting & Analysis</h3>
                <p className="text-gray-400 mb-6">
                  Data-driven insights to optimize your marketing performance
                </p>
                <Link to="/services" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                  MORE INFO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100/20 to-orange-400/20 p-8 transition-all duration-300 hover:shadow-lg">
              <div className="relative z-10">
                <Globe className="h-12 w-12 text-orange-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Social Marketing Strategy</h3>
                <p className="text-gray-400 mb-6">
                  Engaging social media campaigns that connect with your audience
                </p>
                <Link to="/services" className="inline-flex items-center text-orange-400 hover:text-orange-300">
                  MORE INFO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wide">CARE FEATURES</span>
            <h2 className="mt-2 text-3xl font-bold text-white">Provide Awesome Service<br />With Our Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Discover, Explore the Product",
                subtitle: "DISCOVER, EXPLORE & UNDERSTANDING THE PRODUCT",
                icon: Search,
                color: "bg-cyan-100"
              },
              {
                title: "Art Direction & Brand Strategy",
                subtitle: "ART DIRECTION & BRAND COMMUNICATION",
                icon: PenTool,
                color: "bg-yellow-100"
              },
              {
                title: "Product UX, Design & Development",
                subtitle: "DIGITAL PRODUCT UX, DESIGN & DEVELOPMENT",
                icon: Target,
                color: "bg-orange-100"
              },
              {
                title: "Marketing Strategy & SEO Campaigns",
                subtitle: "MARKETING STRATEGY & SEO CAMPAIGNS",
                icon: Globe,
                color: "bg-emerald-100"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
                <div className={`w-16 h-16 ${feature.color} bg-opacity-20 rounded-full flex items-center justify-center mb-4`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400">What sets us apart from the competition</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Strategic Approach',
                description: 'Data-driven strategies tailored to your goals',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Skilled professionals with proven track record',
              },
              {
                icon: Award,
                title: 'Industry Recognition',
                description: 'Award-winning digital marketing solutions',
              },
              {
                icon: BarChart,
                title: 'Measurable Results',
                description: 'Clear ROI and performance metrics',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <feature.icon className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-400">What our clients say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Their strategic approach transformed our online presence completely.",
                author: "John Smith",
                position: "CEO, Tech Solutions Ltd"
              },
              {
                quote: "The results exceeded our expectations. Highly recommended!",
                author: "Sarah Johnson",
                position: "Marketing Director, Global Retail"
              },
              {
                quote: "Professional team that delivers exceptional results.",
                author: "Michael Brown",
                position: "Founder, StartUp Inc"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <p className="text-gray-400 mb-4">"{testimonial.quote}"</p>
                <div className="text-emerald-500 font-semibold">{testimonial.author}</div>
                <div className="text-gray-500">{testimonial.position}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">Get the latest digital marketing insights delivered to your inbox</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">Let's create something amazing together</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-emerald-600 transition duration-300"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}