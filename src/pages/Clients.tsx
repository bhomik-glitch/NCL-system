import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import extramarksLogo from '../assets/Clients/512px-Extramarks_Logo.webp';
import nhpcLogo from '../assets/Clients/512px-NHPC_official_logo.svg.webp';
import abilitiesIndiaLogo from '../assets/Clients/Abilities India Pistons & Ring Limited.png';
import aiiaLogo from '../assets/Clients/ALL INDIA INSTITUTE OF AYURVEDA (AIIA).webp';
import milkoseLogo from '../assets/Clients/milkose.png';
import i2k2Logo from '../assets/Clients/i2k2-logo.png';
import sertoLogo from '../assets/Clients/logo_serto.svg';
import setcoLogo from '../assets/Clients/setco-logo.svg';
import fcsLogo from '../assets/Clients/Fcs-software.png';
import daloopaLogo from '../assets/Clients/daloopa_logo.jpeg';
import csirLogo from '../assets/Clients/Council of Scientific and Industrial Research (CSIR.jpg';
import aiimsLogo from '../assets/Clients/All India Institute of Medical Sciences (AIIMS).webp';
import nitLogo from '../assets/Clients/National Institute of Technology (NIT).png';
import bhelLogo from '../assets/Clients/Bharat Heavy Electricals Limited (BHEL).webp';
import radioLogo from '../assets/Clients/ALL INDIA RADIO.webp';
import beetelLogo from '../assets/Clients/BEETEL TELETECH LIMITED.jpeg';
import devpackLogo from '../assets/Clients/DEVEN PACKAGING PVT. LTD..jpeg';
import sstechnoparkLogo from '../assets/Clients/SS TECHNOPARK PRIVATE LIMITED.jpg';
import shivnadarLogo from '../assets/Clients/shiv-nadar-foundation.jpeg';
import coloplastLogo from '../assets/Clients/Coloplast-Logo.png';
import dentalLogo from '../assets/Clients/INSTITUTE OF DENTAL AND MEDICAL RESEARCH SOCIETY.webp';
import kvsLogo from '../assets/Clients/KENDRIYA VIDYALAYA SANGATHAN.svg';
import powergridLogo from '../assets/Clients/POWER GRID Corporation OF INDIA Limited.jpg';
import mohfwLogo from '../assets/Clients/Ministry of Health and Family Welfare.webp';
import railwaysLogo from '../assets/Clients/Ministry_of_Railways_India.svg';
import armyLogo from '../assets/Clients/Indian_Army_Insignia_circular.webp';
import airforceLogo from '../assets/Clients/Badge_of_the_Indian_Air_Force.webp';
import iiscoLogo from '../assets/Clients/IISCO STEEL PLANT.webp';
import esicLogo from '../assets/Clients/Employee_State_Insurance_Corporation_Logo.webp';
import apacheLogo from '../assets/Clients/APACHE FOOTWEAR INDIA PRIVATE LIMITED.svg';

const logosRow1 = [extramarksLogo, nhpcLogo, abilitiesIndiaLogo, aiiaLogo, milkoseLogo, i2k2Logo, sertoLogo, setcoLogo, fcsLogo];
const logosRow2 = [csirLogo, aiimsLogo, nitLogo, bhelLogo, radioLogo, beetelLogo, devpackLogo, sstechnoparkLogo, shivnadarLogo, coloplastLogo];
const logosRow3 = [dentalLogo, kvsLogo, powergridLogo, mohfwLogo, railwaysLogo, armyLogo, airforceLogo, iiscoLogo, esicLogo, apacheLogo];

type AutoScrollLogoRowProps = {
  direction?: 'forward' | 'reverse';
  speed?: number;
  logos: string[];
};

const AutoScrollLogoRow: React.FC<AutoScrollLogoRowProps> = ({ direction = 'forward', speed = 1, logos }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    let frame: number;
    let scrollWidth = row.scrollWidth / 2;
    function animate() {
      if (!row) return;
      if (!paused) {
        if (direction === 'reverse') {
          if (row.scrollLeft <= 0) {
            row.scrollLeft = scrollWidth;
          } else {
            row.scrollLeft -= speed;
          }
        } else {
          if (row.scrollLeft >= scrollWidth) {
            row.scrollLeft = 0;
          } else {
            row.scrollLeft += speed;
          }
        }
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused, direction, speed]);
  return (
    <div
      className="overflow-x-auto w-full no-scrollbar"
      style={{ WebkitOverflowScrolling: 'touch' }}
      ref={rowRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-8 mb-12 px-2 relative"
        style={{ minWidth: '2000px' }}
      >
        {logos.concat(logos).map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-premium min-w-[9rem] h-24 hover-lift transition-all duration-300"
          >
            <img
              src={logo}
              alt={`Client Logo ${(i % logos.length) + 1}`}
              className="h-16 object-contain mx-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients: React.FC = () => {
  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'BusinessCorp transformed our operations completely. Their solutions increased our efficiency by 40% and helped us scale rapidly.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      company: 'Global Retail Co.',
      role: 'Operations Director',
      content: 'The team at BusinessCorp delivered exactly what we needed. Professional, reliable, and results-driven.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Innovation Labs',
      role: 'CTO',
      content: 'Outstanding technical expertise and excellent customer service. They truly understand business needs.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      company: 'Manufacturing Plus',
      role: 'President',
      content: 'Our partnership with BusinessCorp has been invaluable. They consistently deliver high-quality solutions on time.',
      rating: 5
    }
  ];

  const clientLogos = [
    { name: 'TechStart Inc.', industry: 'Technology' },
    { name: 'Global Retail Co.', industry: 'Retail' },
    { name: 'Innovation Labs', industry: 'Research' },
    { name: 'Manufacturing Plus', industry: 'Manufacturing' },
    { name: 'Financial Group', industry: 'Finance' },
    { name: 'Healthcare Solutions', industry: 'Healthcare' },
    { name: 'Education First', industry: 'Education' },
    { name: 'Energy Corp', industry: 'Energy' },
    { name: 'Media Networks', industry: 'Media' },
    { name: 'Logistics Pro', industry: 'Logistics' },
    { name: 'Real Estate Hub', industry: 'Real Estate' },
    { name: 'Consulting Group', industry: 'Consulting' }
  ];

  const industries = [
    { name: 'Technology', count: 120 },
    { name: 'Healthcare', count: 85 },
    { name: 'Finance', count: 95 },
    { name: 'Manufacturing', count: 78 },
    { name: 'Retail', count: 65 },
    { name: 'Education', count: 45 }
  ];

  const logoRowRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const row = logoRowRef.current;
    if (!row) return;
    let frame: number;
    let speed = 1; // px per frame
    let scrollWidth = row.scrollWidth / 2;

    function animate() {
      if (!row) return;
      if (!paused) {
        if (row.scrollLeft >= scrollWidth) {
          row.scrollLeft = 0;
        } else {
          row.scrollLeft += speed;
        }
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 overflow-hidden" style={{ paddingTop: '6rem' }}>
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-blue-200 rotate-45 opacity-30 animate-pulse-subtle"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-purple-300 rounded-full opacity-25 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our Clients
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            We're proud to work with amazing companies across various industries, 
            helping them achieve their goals and drive success.
          </p>
        </div>
      </section>

      {/* Client Logos - Second Section */}
      <section className="relative py-8 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-purple-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg rotate-12 opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Horizontally auto-scrolling infinite client logos row */}
          <div className="space-y-8">
            <AutoScrollLogoRow direction="forward" logos={logosRow1} />
            <AutoScrollLogoRow direction="reverse" logos={logosRow2} />
            <AutoScrollLogoRow direction="forward" logos={logosRow3} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '25+', label: 'Industries Served' },
              { value: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      {/* Industries Section */}

      {/* Testimonials */}
      {/* Testimonials */}

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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss how we can help your business achieve its goals.
          </p>
          <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-premium hover:shadow-premium-lg transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Clients;