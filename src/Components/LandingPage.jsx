import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 ">
      <div className="textstracture mt-52 px-20 overflow-hidden ">
      {["We Empowered our","client through our","Salesforce Expertise"].map((item,index)=>{
        return <div className="masker" key={index}>
           <div className="w-fit flex ">
           {index === 1 && (<div className="mr-[1vw] w-[7vw] h-[4.7vw] rounded-md relative -top[1.2vw] bg-red-600 mt-4"></div>)}
            <h1  className=" flex items-center text-[4.4vw] uppercase font-['Founders Grotesk']  leading-[5.2vw] tracking-tighter font-medium ">{item}</h1>

                </div>
              </div>
      })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20">
              {["We love, what we do","Start Your Personalized IT Journey Now!"
              ].map((item,index)=>(<p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
              ))}
              <div className="letstalk flex items-center gap-5">
                <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">Let&apos;s Talk </div>
                <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full">
                <span className="rotate-[45deg]">
                <FaArrowUpLong/>
                </span>
                </div>
              </div> 
        </div> 
    </div>
  )
}

export default LandingPage