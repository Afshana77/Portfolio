import { motion } from "framer-motion"
import { useTheme } from "./ThemeContext";

export default function Hero(){
 const { darkMode, toggleTheme } = useTheme();
return(

<section className="min-h-screen flex justify-between items-center text-center dark:bg-black  ">

 <motion.div            initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }} className="  text-left pl-4" >
<p>Hi, I'm Afshana Zaman</p>
<h1 className="text-6xl font-bold pb-2" >I'm <span  className="  
      bg-gradient-to-r from-[#7c6aea] to-pink-600
      bg-clip-text text-transparent" >Senior Frontend Developer</span> </h1>
      <p>I create fast, responsive, and beautiful web & mobile apps.</p>

      <a
  href="#contact"
  className="inline-block mt-6 px-6 py-3 bg-[#7c6aea] text-white rounded-md hover:bg-pink-500 transition"
>
  Hire Me
</a>
 </motion.div>

 <motion.div  initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} className="  transition" >
   {darkMode ?   <img src="/dark_mode.png" alt="Hero Image" className=" " /> : <img src="/profile.png" alt="Hero Image" className=" " /> 
    }
 </motion.div>
</section>

)

}