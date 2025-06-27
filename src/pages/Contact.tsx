import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import whatsappLogo from '../assets/logo/whatsapp-color-svgrepo-com.svg';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Telephone',
      details: ['01204318844']
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Mobile Numbers',
      details: ['9650502771', '9871380725', '9205486598']
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email',
      details: ['info@nclsystems.com']
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Office',
      details: ['D-59 SECTOR 63 NOIDA- 201301 (U.P.)']
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Hours',
      details: ['10 AM to 6 PM Monday to Saturday']
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Business District, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@businesscorp.com'
    },
    {
      city: 'Los Angeles',
      address: '456 Innovation Ave, CA 90210',
      phone: '+1 (555) 987-6543',
      email: 'la@businesscorp.com'
    },
    {
      city: 'Chicago',
      address: '789 Commerce St, IL 60601',
      phone: '+1 (555) 456-7890',
      email: 'chicago@businesscorp.com'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-blue-200 rotate-45 opacity-30 animate-pulse-subtle"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-purple-300 rounded-full opacity-25 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 mb-8 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">Get In Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Ready to transform your business? Get in touch with our team and 
            let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                    placeholder="Your company name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <a
                  href="https://wa.me/" // Placeholder, to be replaced with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-premium hover:shadow-premium-lg transform hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0 mt-1 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8 flex justify-center">
                <a
                  href="https://wa.me/" // Placeholder, to be replaced with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition-all duration-300"
                >
                  <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6 mr-2" />
                  WhatsApp Us
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Find Us Here
                </h3>
                <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3747435622777!2d77.37970397511694!3d28.618528675672387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef034251d86b%3A0xa0322a39bc14171f!2sNCL%20SYSTEMS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1750661831593!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NCL SYSTEMS PRIVATE LIMITED Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;