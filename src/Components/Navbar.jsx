
const Navbar = () => {
  return (
    <div className="fixed z-[999]  w-full px-20 py-8 bg-zinc-900 font-['NeueMontreal'] flex justify-between items-center">
      <div className="logo w-14">

       <img src="https://www.softshala.com/static/media/company_logo.b94798c1d5b4239b0a1a.png" className="Company-logo" alt="brand"></img>
      </div>
         
           <div className="links flex gap-10">
             {["Home","Services", "Our-Work", "About Us", "Career","contact" ].map((item,index)=>(
                 <a key={index} className={`text-lg font-light capitalize  ${index === 5 && "ml-32" }`}>{item}</a>
             ))}
           </div>
    </div>
  )
}

export default Navbar