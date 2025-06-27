import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Zap, Shield, Settings, ArrowRight, Sparkles } from 'lucide-react';
import ipPhoneImg from '../assets/products/IP Phone.webp';
import headsetImg from '../assets/products/headset.webp';
import epabxImg from '../assets/products/EPABX.webp';
import callCenterImg from '../assets/products/call-center-hotline-worker-smiling-helpline-operator-with-headset.webp';
import computerOnRentImg from '../assets/products/computer on rent.webp';
import ciscoImg from '../assets/products/CISCO solutions.webp';
import wirelessImg from '../assets/products/wireless solutions.webp';
import firewallImg from '../assets/products/Network firewall.webp';
import cctvImg from '../assets/products/CCTV solution.webp';
import structuredDataImg from '../assets/products/structured data system .png';

const Products: React.FC = () => {
  const navigate = useNavigate();
  const products = [
    {
      image: structuredDataImg,
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: 'Structured Network Cabling',
      description: 'Structured cabling in networking is a standardized and systematic approach to designing and installing a building\'s or campus\'s telecommunications infrastructure. It involves organizing all the cables, connectors, and hardware into a cohesive, flexible, and scalable system. This system supports various services like voice, data, and video, and it\'s designed to accommodate future growth and changes.'
    },
    {
      image: ipPhoneImg,
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: 'IP Phone Solutions',
      description: 'NCL SYSTEMS offers a reliable, cost-effective, and modular range of IP phones, ideal for small and medium businesses and call centers. They provide zero-touch installation and IP Phone Services, including top brands like Akuvox, Sangoma, Grandstream, and Yealink, to deliver innovative unified communication.'
    },
    {
      image: epabxImg,
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: 'EPABX & IPABX Solutions',
      description: 'These electronic devices provide voice communication for businesses, connecting telephone extensions to public networks and enabling internal communication. They offer features such as call transferring, pick-up, and conferencing. '
    },
    {
      image: callCenterImg,
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: 'Call Center Solutions',
      description: 'NCL SYSTEMS provides a "one-stop contact center solution" that is a software-based dialer, suitable for all types and sizes of call centers. It supports various dialing modes (Predictive, Progressive, Preview, Manual), E-mail & SMS Integration, IVR, CRM, and 100% digital call recording, helping minimize business costs. This solution is available for both on-premises and cloud-based environments, and on rental.'
    },
    {
      image: ciscoImg,
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: 'Cisco Solutions',
      description: 'As a leading Cisco Products Supplier, Dealer, and Distributor in India, NCL SYSTEMS provides a comprehensive range of Cisco IT networking products. Their offerings include Cisco Routers, Switches, UCS, Webex, Meraki, WIFI, Servers, and IP Phones, designed for high-quality network experience and increased productivity.'
    },
    {
      image: wirelessImg,
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: 'Wireless Solutions',
      description: 'NCL SYSTEMS specializes in deploying secure and authenticated wireless networks. These solutions balance user flexibility with security requirements, aiming to increase organizational productivity while lowering network installation costs.'
    },
    {
      image: firewallImg,
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Network Firewall Solutions',
      description: 'NCL SYSTEMS is a trusted firewall provider and partner of top OEMs like Fortinet, SonicWall, and Cisco. They implement firewall security solutions and best IT security practices to protect organizations from various threats by controlling network traffic based on applications, users, and content. Firewalls are also available for rental.'
    },
    {
      image: cctvImg,
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'CCTV Surveillance Solution',
      description: 'NCL SYSTEMS offers IP video monitoring systems that leverage existing IP infrastructure for security and remote monitoring. Users can monitor live images and audio remotely from any networked PC, with features like wireless connectivity and higher resolution. These systems are ideal for applications in sectors like banking, education, transportation, and retail.'
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
            <span className="text-sm font-medium text-blue-600">Business Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our Products
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            NCL SYSTEMS primarily operates within the domain of Information Technology (IT) solutions and services, specializing in providing, implementing, and supporting a range of communication, networking, and security technologies. Based on the items you've listed, their services can be categorized into the following niches:
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 border border-blue-200 rounded-full opacity-20 animate-pulse-subtle"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg rotate-45 opacity-30 animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover-lift shadow-premium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative flex flex-col items-center">
                  {product.image && (
                    <img src={product.image} alt={product.title} className="h-32 w-auto mb-6 rounded-xl object-contain" />
                  )}
                  {/* Optionally show icon below image */}
                  {/* <div className="mb-4">{product.icon}</div> */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 animate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse-subtle"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-xl rotate-45 animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Need Something Custom?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We can create tailored solutions that perfectly match your business requirements.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-premium hover:shadow-premium-lg transform hover:scale-105 animate-fade-in-up" 
            style={{ animationDelay: '0.4s' }}
          >
            Discuss Your Needs
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;