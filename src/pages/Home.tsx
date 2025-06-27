import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Globe, Package, Zap, Shield, Settings, Building2, Star, Mail, Phone, MapPin, Grid, Sparkles, Tag, Network, Wifi } from 'lucide-react';
import extramarksLogo from '../assets/Clients/512px-Extramarks_Logo.webp';
import nhpcLogo from '../assets/Clients/512px-NHPC_official_logo.svg.webp';
import abilitiesIndiaLogo from '../assets/Clients/Abilities India Pistons & Ring Limited.png';
import aiiaLogo from '../assets/Clients/ALL INDIA INSTITUTE OF AYURVEDA (AIIA).webp';
import bg1 from '../assets/background/1.webp';
import bg2 from '../assets/background/2.webp';
import bg3 from '../assets/background/3.webp';
import bg4 from '../assets/background/4.webp';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expert Team',
      description: 'Top Market Technology - The service merges market top leading technology. We can offer the best, reliable technology and modify it to your business right away.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assured',
      description: 'Full Solution Centre - The Company can help you with not just with the telephony, but also the connectivity and network infrastructure as well.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Reach',
      description: 'Free Consultancy – NCL SYSTEMS PVT LTD offers a free Consultancy and Demo of our Product & Services permitting you to experience it earlier to making your choice. The trial comprises the full support, understanding your Problem and guiding with right Solution.'
    },
    {
      icon: <Tag className="h-8 w-8 text-blue-600" />,
      title: 'Affordable Prices',
      description: 'Cost Effective – Choose the best products to form the best solution at the best price.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' }
  ];

  const products = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'NETWORK FIREWALL',
      description: 'Advanced network security and firewall protection for your business infrastructure.'
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
      title: 'WIRELESS SOLUTIONS',
      description: 'Enterprise-grade wireless networking solutions for seamless connectivity.'
    },
    {
      icon: <Network className="h-8 w-8 text-blue-600" />,
      title: 'NETWORKING SOLUTIONS',
      description: 'Complete networking infrastructure setup and management for businesses.'
    }
  ];

  const testimonials = [
    {
      name: 'Nishant',
      company: '',
      role: '2 reviews',
      content: 'One of my best experiences and great going one stop IT & Telecom offering solution around Delhi/NCR. Under one umbrella & roof provide all the basic IT networking solutions.',
      rating: 5,
      date: 'March 29, 2023'
    },
    {
      name: 'Pankaj Sukheja',
      company: '',
      role: '1 review',
      content: 'Very good service provider for Cisco networking.',
      rating: 5,
      date: 'April 2, 2023'
    }
  ];

  const heroImages = [bg2, bg4];
  const [heroIndex, setHeroIndex] = useState(0);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative aspect-[16/9] w-full flex items-center justify-center overflow-hidden">
        {/* Slider Animation for Rotating Background Images */}
        <div className="absolute inset-0 w-full h-full flex transition-transform duration-700" style={{ transform: `translateX(-${heroIndex * 100}%)` }}>
          {heroImages.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              alt="Hero Background"
              className="w-full h-full object-cover flex-shrink-0"
              style={{ pointerEvents: 'none' }}
            />
          ))}
        </div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl font-bold text-white text-center mb-6">
            Transform Your Business<br />With Excellence
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed text-center max-w-2xl">
            We deliver innovative solutions that drive growth, enhance efficiency, and position your business for long-term success in today's competitive market.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-premium hover:shadow-premium-lg transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-700 font-semibold rounded-xl border border-gray-400 hover:bg-white hover:shadow-premium transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Scroll Down Arrow Button */}
        <button
          onClick={() => {
            const el = document.getElementById('features-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="absolute left-1/2 bottom-40 -translate-x-1/2 bg-white/80 hover:bg-white text-blue-700 rounded-full p-2 shadow-lg transition-all duration-300 z-20 animate-bounce"
          aria-label="Scroll Down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Features Section */}
      <section id="features-section" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover-lift shadow-premium"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About NCL SYSTEMS PVT LTD
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                NCL SYSTEMS PVT LTD provides a wide range of technology solutions, following the best practices in the industry. Our offerings include Complete Network Solutions, CCTV, EPABX, IPABX, Computer on Rent, Laptop on Rent, Server on Rent, GSM Gateway on Rent, Hardware Integration, Network Solutions, Firewall, Security Systems, Power Solutions, Office Infrastructure, and Consulting & Outsourcing, including AMC. To view our full range of services, please click on "OUR PRODUCTS".
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            
            <div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-premium">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 animate-float"></div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '15+', label: 'Years in Business' },
                    { value: '500+', label: 'Projects Delivered' },
                    { value: '50+', label: 'Team Members' },
                    { value: '25+', label: 'Industries Served' }
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                        {item.value}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 border border-blue-200 rounded-full opacity-20 animate-pulse-subtle"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg rotate-45 opacity-30 animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of business solutions designed to streamline operations and drive growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <Link
                key={index}
                to="/products"
                className={`group bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover-lift shadow-premium border border-white/50 cursor-pointer transition-transform duration-300 ${expandedProduct === index ? 'scale-110 z-30' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={e => {
                  e.preventDefault();
                  setExpandedProduct(expandedProduct === index ? null : index);
                }}
              >
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-center">
                    {product.description}
                  </p>
                  <div className="text-center">
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/products"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-premium hover:shadow-premium-lg transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Preview Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are proud to serve a diverse range of businesses with our comprehensive solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[extramarksLogo, nhpcLogo, abilitiesIndiaLogo, aiiaLogo].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl hover-lift transition-all duration-300 shadow-premium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-20 object-contain mx-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/clients"
              className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              View All Clients
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Preview Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-purple-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg rotate-12 opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover-lift shadow-premium border border-white/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mr-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"></div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} • {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/clients"
              className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              View All Client Stories
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-1/4 w-28 h-28 border border-blue-200 rounded-full opacity-20 animate-pulse-subtle"></div>
          <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-br from-purple-200 to-blue-200 rounded-xl rotate-45 opacity-25 animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Contact our team and let's discuss your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, title: 'Call Us', info: '+1 (555) 123-4567' },
              { icon: Mail, title: 'Email Us', info: 'info@businesscorp.com' },
              { icon: MapPin, title: 'Visit Us', info: '123 Business District, NY' }
            ].map((contact, index) => (
              <div 
                key={index} 
                className="group text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-purple-200 group-hover:scale-110 transition-all duration-300">
                  <contact.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-premium hover:shadow-premium-lg transform hover:scale-105"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 animate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse-subtle"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-xl rotate-45 animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss how we can help transform your business and achieve your goals.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-premium hover:shadow-premium-lg transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const TypewriterHeading: React.FC = () => {
  const fullText = 'Transform Your Business\nWith Excellence';
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, fullText[index] === '\n' ? 400 : 70);
      return () => clearTimeout(timeout);
    } else {
      setShowCursor(false);
    }
  }, [index, fullText]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight whitespace-pre-line">
      {displayed}
      {showCursor && <span className="text-blue-600 animate-pulse ml-1">_</span>}
    </h1>
  );
};

export default Home;