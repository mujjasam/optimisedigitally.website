import React from 'react';
import { Users, Target, Award, CheckCircle, Star, Globe, Coffee, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              OPTIMISE DIGITALLY LTD is a leading digital marketing agency helping businesses
              transform their digital presence and achieve exceptional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 mb-4">
                Founded in 2015, OPTIMISE DIGITALLY LTD has grown from a small startup to a 
                leading digital marketing agency. Our journey has been driven by a passion 
                for helping businesses succeed in the digital world.
              </p>
              <p className="text-gray-400 mb-6">
                Today, we're proud to have served over 500 clients across various industries, 
                delivering exceptional results and building lasting partnerships.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '500+', label: 'Clients' },
                  { number: '50+', label: 'Team Members' },
                  { number: '15+', label: 'Countries' },
                  { number: '98%', label: 'Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-emerald-500">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1450788989/photo/portrait-of-happy-african-businesswoman-holding-digital-tablet-in-the-office.jpg?s=612x612&w=0&k=20&c=aalIPdiN9iTx45CkGrGMlGn-LVyICKzNvgoARsyAArg="
                alt="Business Woman with Digital Tablet"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Target className="h-12 w-12 text-emerald-500 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-400">
                To be the most trusted digital marketing partner for businesses seeking
                innovative solutions and measurable results in the digital landscape.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Leading industry innovation',
                  'Setting digital marketing standards',
                  'Global market presence',
                  'Continuous evolution'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Award className="h-12 w-12 text-emerald-500 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400">
                To deliver exceptional digital marketing solutions that help our clients
                achieve their business objectives through creative strategies and
                data-driven decisions.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Client-focused approach',
                  'Data-driven strategies',
                  'Innovative solutions',
                  'Measurable results'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Excellence',
                description: 'Striving for the highest quality in everything we do'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'Loving what we do and putting our heart into every project'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Working together to achieve exceptional results'
              },
              {
                icon: Globe,
                title: 'Innovation',
                description: 'Embracing new technologies and creative solutions'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <value.icon className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-400">
              Meet the experts behind our successful digital strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://media.istockphoto.com/id/2158956758/photo/young-female-entrepreneur-smiling-and-working-on-her-lap-top-in-modern-workspace.jpg?s=612x612&w=0&k=20&c=IW7rj0U90EGjq-RAbLg3lolsTd0aV1AUWxsr1ZPJmUs=',
                description: 'Digital marketing veteran with 15+ years of experience'
              },
              {
                name: 'Michael Chen',
                role: 'Digital Marketing Director',
                image: 'https://images.unsplash.com/photo-1713947507130-227586ab3024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlJTIwb2ZmaWNlJTIwcGVyc29ufGVufDB8fDB8fHww',
                description: 'SEO specialist and strategy expert'
              },
              {
                name: 'Emily Williams',
                role: 'Creative Director',
                image: 'https://media.istockphoto.com/id/1326211139/photo/portrait-of-a-confident-young-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=m3fy9vppRgUU8UjicupM9YD1VstccKxGwC04D0CmJh0=',
                description: 'Award-winning designer and creative strategist'
              },
              {
                name: 'David Thompson',
                role: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1713947507130-227586ab3024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlJTIwb2ZmaWNlJTIwcGVyc29ufGVufDB8fDB8fHww',
                description: 'Technical expert with focus on innovation'
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-emerald-500 mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-gray-400">Our achievements in the industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              'Best Digital Marketing Agency 2023',
              'Innovation Excellence Award',
              'Top SEO Service Provider',
              'Client Satisfaction Award'
            ].map((award, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
                <Award className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <p className="text-gray-400">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8">Partner with us to achieve your digital marketing goals</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-emerald-600 transition duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}