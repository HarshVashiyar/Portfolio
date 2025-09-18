import React from 'react';
import { Calendar, MapPin, ExternalLink, Trophy, Award, Target, Star } from 'lucide-react';

const Milestones = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Alpha Automation Pvt. Ltd.',
      location: 'India',
      period: 'May 2025 - July 2025',
      description: 'Worked as a Full Stack Developer developing web applications and automation solutions. Gained hands-on experience with modern web technologies and development practices.',
      achievements: [
        'Developed full-stack web applications',
        'Worked with modern development frameworks',
        'Collaborated in agile development environment'
      ],
      tech: ['MERN Stack', 'JavaScript', 'React', 'Node.js', 'MongoDB']
    }
  ];

  const achievements = [
    {
      title: 'Codeforces Round 930',
      rank: 'Rank 3450/35,000+',
      percentage: 'Top 10% globally',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'CodeChef Starters 144',
      rank: 'Global Rank 202',
      percentage: 'Top 0.4%',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'JEE Advanced 2022',
      rank: 'AIR 16,846',
      percentage: 'Top 10.8% of 155,538',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'JEE Mains 2022',
      rank: 'AIR 12,001',
      percentage: 'Top 1% among 1M+',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="milestones" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Milestones
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and notable accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-500 to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {/* Experience */}
            {experiences.map((exp, index) => (
              <div 
                key={`exp-${index}`}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-orange-400 rounded-full transform md:-translate-x-1/2 border-4 border-gray-900 z-10">
                  <div className="w-full h-full bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-orange-400/30 transition-all duration-500 group hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-orange-400 text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-gray-400 mb-4">
                        <span className="font-semibold">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-orange-400/10 text-orange-400 rounded-lg text-sm border border-orange-400/20 hover:bg-orange-400/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for alignment */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}

            {/* Achievements */}
            {achievements.map((achievement, index) => (
              <div 
                key={`ach-${index}`}
                className={`flex items-center ${(index + experiences.length) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
                style={{animationDelay: `${(index + experiences.length) * 0.2}s`}}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-orange-400 rounded-full transform md:-translate-x-1/2 border-4 border-gray-900 z-10">
                  <div className="w-full h-full bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${(index + experiences.length) % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                  <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-orange-400/30 transition-all duration-500 group hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{achievement.rank}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-orange-400 font-semibold text-sm">
                          {achievement.percentage}
                        </span>
                        <div className={`w-16 h-1 bg-gradient-to-r ${achievement.color} rounded-full opacity-60`}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for alignment */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;