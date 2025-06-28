import React from 'react';
import { Users, Target, Lightbulb, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Customer Focus',
      description: 'We prioritize understanding and meeting our clients\' unique needs with tailored IT solutions.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: 'Technical Excellence',
      description: 'We maintain the highest standards in IT services and stay updated with the latest technologies.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Reliability',
      description: 'We deliver consistent, dependable service and support to ensure our clients\' systems run smoothly.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'End-to-End Solutions',
      description: 'We provide comprehensive IT & Telecom solutions under one roof for maximum convenience.'
    }
  ];

  const team = [
    {
      name: 'Leadership Team',
      role: 'Management',
      description: 'Our experienced leadership team brings decades of combined expertise in IT, networking, and telecommunications.'
    },
    {
      name: 'Technical Team',
      role: 'IT & Network Specialists',
      description: 'Certified professionals specializing in networking, security, and infrastructure solutions.'
    },
    {
      name: 'Support Team',
      role: 'Customer Support',
      description: 'Dedicated support staff ensuring prompt response and resolution to client needs.'
    },
    {
      name: 'Sales Team',
      role: 'Business Development',
      description: 'Expert consultants helping clients find the right solutions for their business requirements.'
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

        <div className="relative px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            About NCL SYSTEMS PVT LTD
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            NCL SYSTEMS PVT LTD provides a wide range of technology solutions, following the best practices in the industry. Our offerings include Complete Network Solutions, CCTV, EPABX, IPABX, Computer on Rent, Laptop on Rent, Server on Rent, GSM Gateway on Rent, Hardware Integration, Network Solutions, Firewall, Security Systems, Power Solutions, Office Infrastructure, and Consulting & Outsourcing, including AMC.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        
        <div className="relative px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About us
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  NCL SYSTEMS PVT LTD has established itself as a trusted name in providing comprehensive IT and telecom solutions. 
                  We specialize in delivering end-to-end IT/BPO consulting services using industry best practices, ensuring our clients 
                  receive the highest quality solutions for their business needs.
                </p>
                <p>
                  Our extensive range of services includes Complete VOIP Solutions, CCTV, EPABX, IPABX, Computer on Rent, 
                  Laptop on Rent, Server on Rent, GSM Gateway on Rent, Hardware Integration, Network Solutions, Firewall, 
                  Security Systems, and Power Solutions. We also provide Office Infrastructure consulting and IT Outsourcing, 
                  including AMC services.
                </p>
                <p>
                  What sets us apart is our commitment to providing one-stop IT & Telecom solutions around Delhi/NCR. 
                  Under one umbrella, we offer all the basic IT networking solutions, making it convenient for businesses 
                  to manage their technology needs through a single, reliable partner.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-premium">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-blue-200 rounded-full opacity-30 animate-pulse-subtle"></div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '15+', label: 'Years Experience' },
                    { value: '500+', label: 'Happy Clients' },
                    { value: '50+', label: 'Team Members' },
                    { value: '1000+', label: 'Projects Completed' }
                  ].map((item, index) => (
                    <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
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

      {/* Values Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 border border-blue-200 rounded-full opacity-20 animate-pulse-subtle"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg rotate-45 opacity-30 animate-float"></div>
        </div>
        
        <div className="relative px-12">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center hover-lift shadow-premium border border-white/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl group-hover:from-blue-100 group-hover:to-purple-100 group-hover:scale-110 transition-all duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;