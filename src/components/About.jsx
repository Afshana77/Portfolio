import { motion } from "framer-motion";

export default function About() {
  // Organize skills into categories
  

  return (
    <section
      className="     px-6 lg:px-20 py-12 dark:bg-black bg-[#e0dfeb]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about.png"
            alt="Afshana"
            className="w-64 h-64 object-cover rounded-lg "
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-[#7c6aea] font-semibold uppercase mb-2">
            About Me
          </p>
          <h1 className="text-3xl font-bold mb-4">
            Afshana <span className="text-[#7c6aea]">Zaman</span>
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            I’m a Senior Frontend Developer based in Bangalore with 5+ years of
            experience building high-performance web and mobile applications. I
            specialize in React.js, Next.js, React Native, and headless CMS
            platforms like Agility CMS and Storyblok. I focus on creating
            scalable, SEO-optimized, and user-friendly products across
            healthcare, e-commerce, and content-driven platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
