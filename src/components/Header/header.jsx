
export function Header(){
     const sections=['Home','Contact Us','About Us','Products','Dealer Certifications','Services']
       const ids=['home','touch','aboutus','products','certificate','touch']
       let i=0;
    return(
        <section className="flex justify-center content-center align-center p-1 mb-4  gap-5" id="header">
         <div className="flex">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 text-green-400  animate-pulse">
                <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                </svg>
            </span>
            <div className="flex flex-col">
            <span className="text-2xl font-bold">
                Power Solutions 
            </span>
            <span className="text-green-400 font-bold">
                Powering Today,Tommorow
            </span>
            </div>
         </div>
         <div className="flex justify-between gap-2">
            <div className="flex items-center gap-1">
            {sections.map((item, idx) => (
                <a
                key={item}
                href={`#${ids[idx]}`}
                className="no-underline text-gray-700 px-2 py-1 rounded-md 
                            hover:text-green-600 hover:bg-green-100 
                            transition-colors " style={{textDecoration:"none",color:"grey"}}
                >
                {item}
                </a>
            ))}
            </div>

         </div>
         <div className="content-center align-middle">
            <button className="bg-green-500 text-white font-bold p-2
             rounded">
                <a href="#touch" className="hover:text-green-400 cursor-pointer transition" style={{textDecoration:"none",color:"white"}}>Get Best Prices Now</a>
                 </button>
         </div>
        </section>
    )
}