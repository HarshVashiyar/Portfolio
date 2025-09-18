import React from 'react';

const Skills = () => {
  // Skill categories with official colors and symbols
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { 
          name: 'C', 
          symbol: 'C',
          bgColor: 'from-blue-600 to-blue-800',
          textColor: 'text-white',
          description: 'System programming & algorithms'
        },
        { 
          name: 'C++', 
          symbol: 'C++',
          bgColor: 'from-blue-700 to-indigo-800',
          textColor: 'text-white',
          description: 'Object-oriented programming'
        },
        { 
          name: 'Java', 
          symbol: '☕',
          bgColor: 'from-orange-500 to-red-600',
          textColor: 'text-white',
          description: 'Enterprise applications'
        },
        { 
          name: 'Python', 
          symbol: '🐍',
          bgColor: 'from-green-500 to-blue-600',
          textColor: 'text-white',
          description: 'Data science & automation'
        },
        { 
          name: 'JavaScript', 
          symbol: 'JS',
          bgColor: 'from-yellow-400 to-yellow-600',
          textColor: 'text-black',
          description: 'Full-stack web development'
        },
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { 
          name: 'HTML5', 
          symbol: '🌐',
          bgColor: 'from-orange-500 to-red-500',
          textColor: 'text-white',
          description: 'Semantic markup & structure'
        },
        { 
          name: 'CSS3', 
          symbol: '🎨',
          bgColor: 'from-blue-500 to-cyan-500',
          textColor: 'text-white',
          description: 'Modern styling & animations'
        },
        { 
          name: 'React', 
          symbol: '⚛️',
          bgColor: 'from-cyan-400 to-blue-500',
          textColor: 'text-white',
          description: 'Component-based UI library'
        },
        { 
          name: 'Tailwind CSS', 
          symbol: '💨',
          bgColor: 'from-teal-400 to-cyan-600',
          textColor: 'text-white',
          description: 'Utility-first CSS framework'
        },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { 
          name: 'Node.js', 
          symbol: '🟢',
          bgColor: 'from-green-600 to-green-800',
          textColor: 'text-white',
          description: 'Server-side JavaScript runtime'
        },
        { 
          name: 'MongoDB', 
          symbol: '🍃',
          bgColor: 'from-green-500 to-green-700',
          textColor: 'text-white',
          description: 'NoSQL document database'
        },
        { 
          name: 'PostgreSQL', 
          symbol: '🐘',
          bgColor: 'from-blue-600 to-indigo-700',
          textColor: 'text-white',
          description: 'Advanced relational database'
        },
        { 
          name: 'Express.js', 
          symbol: '🚀',
          bgColor: 'from-gray-700 to-gray-900',
          textColor: 'text-white',
          description: 'Fast web framework for Node.js'
        },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { 
          name: 'Git', 
          symbol: '📝',
          bgColor: 'from-orange-500 to-red-600',
          textColor: 'text-white',
          description: 'Version control system'
        },
        { 
          name: 'Docker', 
          symbol: '🐳',
          bgColor: 'from-blue-400 to-blue-700',
          textColor: 'text-white',
          description: 'Containerization platform'
        },
        { 
          name: 'AWS', 
          symbol: '☁️',
          bgColor: 'from-orange-400 to-yellow-600',
          textColor: 'text-black',
          description: 'Cloud computing services'
        },
        { 
          name: 'Linux', 
          symbol: '🐧',
          bgColor: 'from-yellow-500 to-orange-600',
          textColor: 'text-black',
          description: 'Unix-like operating system'
        },
        { 
          name: 'Vercel', 
          symbol: '▲',
          bgColor: 'from-black to-gray-800',
          textColor: 'text-white',
          description: 'Frontend deployment platform'
        },
      ]
    }
  ];

  // Individual skill card component
  const SkillCard = ({ skill, index, categoryIndex }) => (
    <div 
      className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
      style={{animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`}}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative z-10 p-6">
        {/* Icon/Symbol section */}
        <div className="flex items-center justify-center mb-4">
          <div className={`w-16 h-16 bg-gradient-to-r ${skill.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
            <span className={`text-2xl font-bold ${skill.textColor}`}>
              {skill.symbol}
            </span>
          </div>
        </div>
        
        {/* Skill name */}
        <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-orange-400 transition-colors duration-300">
          {skill.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {skill.description}
        </p>
        
        {/* Decorative bottom border */}
        <div className={`mt-4 h-1 bg-gradient-to-r ${skill.bgColor} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 via-orange-400/5 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );

  // Category section component
  const CategorySection = ({ category, categoryIndex }) => (
    <div 
      className="mb-16"
      style={{animationDelay: `${categoryIndex * 0.2}s`}}
    >
      {/* Category title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
          {category.title}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </h3>
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={index} 
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies, frameworks, and tools I use to build 
            exceptional digital experiences and solve complex problems
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Skills categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <CategorySection 
              key={category.title} 
              category={category} 
              categoryIndex={categoryIndex}
            />
          ))}
        </div>

        {/* Additional expertise section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 hover:border-orange-400/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Data Structures & Algorithms',
                'Object-Oriented Programming',
                'Database Management Systems',
                'Computer Networks',
                'Operating Systems',
                'Software Engineering',
                'Problem Solving',
                'Code Optimization'
              ].map((expertise, index) => (
                <span 
                  key={expertise}
                  className="px-4 py-2 bg-orange-400/10 text-orange-400 rounded-full text-sm border border-orange-400/20 hover:bg-orange-400/20 hover:scale-105 transition-all duration-300 cursor-default"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {expertise}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;