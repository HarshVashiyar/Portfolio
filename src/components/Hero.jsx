import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypingEffect from './TypingEffect';

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "Problem Solver", 
    "Creative Thinker",
    "Code Architect",
    "Tech Enthusiast"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/10 rounded-full animate-bounce" 
             style={{animationDelay: '0s', animationDuration: '3s'}} />
        <div className="absolute top-60 right-20 w-16 h-16 bg-orange-400/5 rounded-lg rotate-45 animate-bounce" 
             style={{animationDelay: '1s', animationDuration: '4s'}} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-orange-400/8 rounded-full animate-bounce" 
             style={{animationDelay: '2s', animationDuration: '5s'}} />
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-orange-400/6 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-18 h-18 bg-orange-400/4 rounded-lg animate-pulse" 
             style={{animationDelay: '1.5s'}} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-orange-400 bg-clip-text text-transparent">
            Harsh Vashiyar
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 mb-6 h-12">
            I am a{' '}
            <span className="text-orange-400">
              <TypingEffect texts={roles} />
            </span>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences with modern technologies.
            Turning ideas into elegant, scalable solutions that make a difference.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <a href="https://drive.google.com/file/d/1hg3IAYsOCfIFS6qrSb7rsKi6Ejf5KiCS/view?usp=sharing/" className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25" target="_blank">
            <span className="relative z-10 flex items-center gap-2">
              View Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}
            className="px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-xl font-semibold hover:bg-orange-400 hover:text-gray-900 transition-all duration-300"
          >
            View My Work
          </button>
        </div>
        
        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, href: "https://github.com/HarshVashiyar", label: "GitHub", target: "_blank" },
            { icon: Linkedin, href: "https://linkedin.com/in/harsh-vashiyar-56063a251/", label: "LinkedIn", target: "_blank" },
            { icon: Mail, href: "mailto:harshvashiyar@gmail.com", label: "Email", target: "_blank" }
          ].map(({ icon: Icon, href, label, target }) => (
            <a
              key={label}
              href={href}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-gray-700/50 hover:scale-110 transition-all duration-300 group border border-gray-700 hover:border-orange-400/30"
              aria-label={label}
              target={target}
            >
              <Icon className="w-6 h-6 group-hover:animate-pulse" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;