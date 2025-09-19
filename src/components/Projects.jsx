import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Code-Trialz',
      description: 'A full-stack online judge platform for competitive programming with real-time code execution, problem management, and user ranking system.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Git', 'Docker', 'AWS', 'Linux', 'Operating System', 'Vercel', 'Nginx', 'Tailwind CSS'],
      github: 'https://github.com/HarshVashiyar/CodeTrialz',
      live: 'https://code-trialz.harshvashiyar.in',
      featured: true
    },
    {
      title: 'MailStorm',
      description: 'A full-stack sub-CRM platform for email automation and communication management with advanced analytics and campaign tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Git', 'Cron', 'Redux', 'PostgreSQL', 'cPanel', 'Tailwind CSS', 'Apache'],
      github: 'https://github.com/HarshVashiyar/MailStorm',
      live: '#',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  // const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I love working with
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-orange-400/30 transition-all duration-500 hover:scale-105 overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.github}
                      target="_blank"
                      className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      className="w-10 h-10 bg-orange-400/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-orange-400/70 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-orange-400/10 text-orange-400 rounded-lg text-sm border border-orange-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Technologies */}
        {/* <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Arduino', desc: 'Hardware programming and IoT development' },
              { title: 'MATLAB', desc: 'Mathematical computing and data analysis' },
              { title: 'LaTeX', desc: 'Document preparation and academic writing' },
              { title: 'DSA', desc: 'Data Structures and Algorithms expertise' },
              { title: 'OOPs', desc: 'Object-Oriented Programming principles' },
              { title: 'Computer Networks', desc: 'Network protocols and communication' },
              { title: 'DBMS', desc: 'Database management systems' },
              { title: 'Operating Systems', desc: 'System programming and architecture' }
            ].map((skill, index) => (
              <div 
                key={skill.title}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-400/30 transition-all duration-300 hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {skill.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;