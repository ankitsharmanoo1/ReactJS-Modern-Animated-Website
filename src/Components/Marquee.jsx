import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div className="w-50 h-50 py-20 bg-zinc-800 rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-900 flex whitespace-nowrap gap-10 overflow-hidden">
      <motion.img  initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}} src="https://www.briskminds.com/assets/img/team/achive3.png" className=" w-auto h-50 leading-none pt-10 -mb-25"></motion.img>
      <motion.img  initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}} src="https://www.briskminds.com/assets/img/team/achive3.png" className=" w-auto h-50 leading-none pt-10 -mb-25"></motion.img>
      <motion.img  initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}} src="https://www.briskminds.com/assets/img/team/achive3.png" className=" w-auto h-500 leading-none pt-10 -mb-25"></motion.img>


      </div>
    </div>
  )
}

export default Marquee


















// import { motion } from "framer-motion";

// const Marquee = () => {
//   return (
//     <div className="w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
//       <div className="text border-t-2 border-b-2 border-zinc-800 flex whitespace-nowrap gap-10 overflow-hidden">
//         <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}} className="text-[15vw] leading-none font-['Founders_Grotesk_X-Condensed uppercase pt-10 -mb-20']">softshala</motion.h1>
//         <motion.h1 initial={{x:0}}  animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}}  className="text-[15vw] leading-none font-['Founders_Grotesk_X-Condensed uppercase pt-10 -mb-20']">softshala</motion.h1>
//       </div>
//     </div>
//   )
// }

// export default Marquee