import { motion } from "framer-motion";
export default function Experience() {
  const companies = [
    {
      name: "Access Design Solutions",
      project: "Next.js & React Native apps, Agility CMS, AI integrations",
      link: "https://www.appliedradiology.com/",
    },
    {
      name: "Ace Turtle",
      project: "Connect App & Smart Fitting Room (React Native, iOS & Android)",
      link: "https://www.irent.com/",
    },
    {
      name: "Eoot Technologies",
      project: "Web & mobile apps, payment integrations, scalable frontends",
      link: "#",
    },
  ];
  return (
    <section className=" px-6 lg:px-20 py-12 bg-[#e0dfeb] dark:bg-black">

      <h2 className="text-xl font-bold mb-6">
        Work I’ve Contributed To
      </h2>

      <motion.div
        className="flex gap-6 overflow-x-auto px-6"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {companies.map((company, idx) => (
          <motion.div
            key={idx}
            className="min-w-[250px] p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-lg mb-2 text-[#7c6aea]">
              {company.name}
            </h3>
            <p className="text-gray-700 text-sm mb-3">{company.project}</p>
            {company.link && (
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c6aea] text-sm hover:underline"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}