import React from 'react';
import { Code, Coffee, Lightbulb, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Months Experience', value: '2+', icon: Code },
    { label: 'Projects Completed', value: '2+', icon: Lightbulb },
    { label: 'Technologies', value: '20+', icon: Heart },
    { label: 'Cups of Coffee', value: '∞', icon: Coffee },
  ];

  const highlights = [
    { icon: Award, title: 'Quality Focused', desc: 'Committed to delivering high-quality, maintainable code' },
    { icon: Users, title: 'Team Player', desc: 'Experience working in agile teams and leading projects' },
    { icon: Lightbulb, title: 'Problem Solver', desc: 'Love tackling complex challenges with creative solutions' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-400/30 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-bold text-orange-400 mb-4 relative z-10">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4 relative z-10">
                I'm a passionate Full Stack Developer with 2+ months of professional experience 
                at Alpha Automation Pvt. Ltd. My journey began with curiosity about how websites 
                work, and it has evolved into a deep love for crafting exceptional user experiences 
                and solving complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed relative z-10">
                I specialize in MERN stack development and enjoy working on projects that 
                challenge me to learn and grow. When I'm not coding, you'll find me exploring 
                new technologies, contributing to open source, or building innovative solutions.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value, icon: Icon }, index) => (
              <div 
                key={label} 
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-400/30 transition-all duration-300 hover:scale-105 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Icon className="w-8 h-8 text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }, index) => (
            <div 
              key={title}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-400/30 transition-all duration-300 hover:scale-105 group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-400/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;