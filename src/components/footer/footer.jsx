import { green } from "@mui/material/colors";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.json'
export   function Footer() {
    const ids=['home','aboutus','products','certificate','services','touch']
    const socials = [
  { name: "facebook", icon: "bi bi-facebook" },
  { name: "twitter", icon: "bi bi-twitter-x" },
  { name: "linkedin", icon: "bi bi-linkedin" },
  { name: "youtube", icon: "bi bi-youtube" },
  { name: "instagram", icon: "bi bi-instagram" },
];
    let i=0;
  return (
    <footer className="w-full" id="footer">

    
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white text-2xl font-bold">
              Ready to Power Your Future?
            </h3>
            <p className="text-white/90 text-sm">
              Get in touch with us today for the best deals on power equipment.
            </p>
          </div>
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded  flex items-center gap-2 hover:shadow-xl transition">
            <a href="#touch"  style={{textDecoration:"none",color:"green"}}>Get Best Price Now</a>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

  
      <div className="bg-gradient-to-b from-[#0b1220] to-[#050b16] text-gray-300 pt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

         
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 text-white font-bold flex items-center justify-center rounded-lg">
                PSF
              </div>
              <div>
                <h4 className="text-white font-semibold">Power Solutions Factory</h4>
                <p className="text-xs text-green-400">Powering Tomorrow, Today</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              India's trusted manufacturer of premium power equipment and energy
              solutions, serving homes and businesses nationwide.
            </p>

            <div className="flex gap-3 mt-4">
 {socials.map((s) => (
    <a
      key={s.name}
      href="#"
      className="w-9 h-9 flex items-center justify-center rounded-lg 
                 bg-white/10 hover:bg-green-600 
                 transition-all duration-200
                 text-white no-underline"
    >
      <i className={`${s.icon} text-lg`}></i>
    </a>
  ))}
            </div>
          </div>

         
          <div>
            <h5 className="text-white font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Products", "Dealer Certificates", "Services", "Contact Us"].map((item) => (
                <li key={item} className="hover:text-green-400 cursor-pointer transition">
                <a href={`#${ids[i++]}`} style={{textDecoration:"none",color:"grey"}}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h5 className="text-white font-semibold mb-4">Our Products</h5>
            <ul className="space-y-2 text-sm">
              {["Inverters", "Batteries", "UPS Systems", "Solar Panels", "Solar Inverters", "Lithium Battery"].map(
                (item) => (
                  <li key={item} >
                    <a href="#products" className="hover:text-green-400 cursor-pointer transition" style={{textDecoration:"none",color:"grey"}}>{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

         
          <div>
            <h5 className="text-white font-semibold mb-4">Contact Us</h5>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-green-400 mt-1" />
                <span>Mundka, New Delhi, Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-400" />
                <span>+91-8045910957</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-green-400" />
                <span>info@powersolutionsfactory.in</span>
              </div>
            </div>

            <div className="mt-5 bg-white/10 p-4 rounded-xl text-sm">
              <p className="text-gray-400 text-xs">GST Number</p>
              <p className="text-white font-semibold">07GLDPS6541G2ZS</p>
            </div>
          </div>
        </div>

    
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2026 Power Solutions Factory. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
