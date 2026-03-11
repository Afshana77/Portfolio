import { motion } from "framer-motion";

export default function Skills() {
  // Organize skills into categories
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: ["React.js", "Next.js", "React Native", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "LESS"],
    },
    {
      title: "State & Architecture",
      skills: ["Redux", "Context API", "Component-driven Architecture", "Reusable UI Systems"],
    },
    {
      title: "Backend & APIs",
      skills: ["AdonisJS", "REST APIs", "API Integration", "Neon Database"],
    },
    {
      title: "AI & CMS",
      skills: ["OpenAI APIs", "LLM Integration", "Prompt Optimization", "Agility CMS", "Storyblok"],
    },
    {
      title: "Performance & SEO",
      skills: ["Page Speed Optimization", "SEO Best Practices", "CMS-driven Rendering"],
    },
    {
      title: "Tools & Soft Skills",
      skills: ["GitHub", "Beanstalk", "Jira", "CI/CD Basics", "Postman", "Client Communication", "Problem-solving", "Cross-team Collaboration"],
    },
  ];

  return (
    <section id="skills" className="  px-6 lg:px-20 py-12">
      <div className="   items-center">

 

        {/* Text Content */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
      

          <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold mb-2 text-[#7c6aea]">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}