import { projects } from "../data/projects";

export default function AllProjects() {

const groupedProjects = projects.reduce((acc, project) => {
  acc[project.company] = acc[project.company] || [];
  acc[project.company].push(project);
  return acc;
}, {});

return (

<section className="py-20 max-w-6xl mx-auto">

<h1 className="text-4xl font-bold text-center mb-12">
All Projects
</h1>

{Object.keys(groupedProjects).map((company, index) => (

<div key={index} className="mb-16">

<h2 className="text-2xl font-bold mb-8 text-[#7c6aea]">
{company}
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{groupedProjects[company].map((p, i) => (

<div
key={i}
className="bg-white/5 border border-white/10 p-8 rounded-xl hover:scale-105 transition"
>

<h3 className="text-xl font-semibold">
{p.name}
</h3>

<p className="text-gray-300 mt-3">
{p.desc}
</p>

<p className="text-gray-400 mt-3 text-sm">
Tech: {p.tech}
</p>

<a
href={p.link}
target="_blank"
rel="noreferrer"
className="inline-block mt-4 text-[#7c6aea]"
>
Visit Project →
</a>

</div>

))}

</div>

</div>

))}

</section>

);

}