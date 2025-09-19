const Skills = () => {
  const marqueeRows = [
    {
      direction: 'left',
      speed: 'animate-marquee-left',
      items: [
        { name: 'C', slug: 'c' },
        { name: 'C++', slug: 'cplusplus' },
        { name: 'Java', slug: 'openjdk' },
        { name: 'Python', slug: 'python' },
        { name: 'JavaScript', slug: 'javascript' },
        // { name: 'TypeScript', slug: 'typescript' },
        { name: 'LaTeX', slug: 'overleaf' },
      ],
    },
    {
      direction: 'right',
      speed: 'animate-marquee-right',
      items: [
        { name: 'HTML5', slug: 'html5' },
        { name: 'CSS3', slug: 'css3' },
        { name: 'React', slug: 'react' },
        { name: 'Express', slug: 'express' },
        { name: 'Node.js', slug: 'nodedotjs' },
        { name: 'Redux', slug: 'redux' },
        { name: 'Tailwind CSS', slug: 'tailwindcss' },
        { name: 'Bootstrap', slug: 'bootstrap' },
        { name: 'Vite', slug: 'vite' },
      ],
    },
    {
      direction: 'left',
      speed: 'animate-marquee-left-slow',
      items: [
        { name: 'MongoDB', slug: 'mongodb' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'Docker', slug: 'docker' },
        { name: 'AWS', slug: 'amazonaws' },
        { name: 'cPanel', slug: 'cpanel' },
        { name: 'Git', slug: 'git' },
        { name: 'Postman', slug: 'postman' },
        { name: 'Linux', slug: 'linux' },
        { name: 'Nginx', slug: 'nginx' },
        { name: 'Vercel', slug: 'vercel' },
        { name: 'Arduino', slug: 'arduino' },
        // { name: 'Redis', slug: 'redis' },
        // { name: 'GraphQL', slug: 'graphql' },
      ],
    },
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

        {/* <div className="grid md:grid-cols-3 gap-8">
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
        </div> */}

      {/* Animated Skill Cards Marquee */}
      <div className="mt-16 space-y-10">
        {marqueeRows.map((row, rowIdx) => (
          <div key={rowIdx} className="relative overflow-hidden">
            <div 
              className={`flex w-[300%] ${row.speed} will-change-transform`} 
              style={{ 
                animationIterationCount: 'infinite',
                animationPlayState: 'running',
                animationFillMode: 'both',
                animationDelay: '0s',
                animationDirection: 'normal'
              }}
            >
              {[...row.items, ...row.items].map((item, i) => (
                <div
                  key={`${item.slug}-${i}`}
                  className="w-56 md:w-72 flex-none mr-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center border border-gray-700 shadow-inner">
                      <img
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${item.slug}.svg`}
                        alt={item.name}
                        className="w-10 h-10"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="text-white text-xl font-bold leading-tight">{item.name}</div>
                    </div>
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