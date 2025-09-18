import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'C++', level: 85, color: 'from-blue-600 to-blue-400' },
        { name: 'Java', level: 80, color: 'from-orange-500 to-red-500' },
        { name: 'Python', level: 80, color: 'from-green-500 to-yellow-500' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'React', level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: 'Node.js', level: 80, color: 'from-green-600 to-green-400' },
        { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-700' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85, color: 'from-red-500 to-orange-500' },
        { name: 'Docker', level: 70, color: 'from-blue-400 to-blue-600' },
        { name: 'AWS', level: 70, color: 'from-orange-400 to-yellow-500' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-600 to-indigo-600' },
        { name: 'Linux', level: 80, color: 'from-yellow-500 to-orange-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-orange-400/30 transition-all duration-500 group"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <h3 className="text-2xl font-bold text-orange-400 mb-6 group-hover:scale-105 transition-transform duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group/skill"
                    style={{animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s`}}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm group-hover/skill:text-orange-400 transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out hover:scale-105 transform origin-left`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.5) + (index * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;