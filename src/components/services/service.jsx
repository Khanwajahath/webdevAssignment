import { services } from "../../../services.js";
import {
  Wrench,
  Settings,
  Headphones,
  ShieldCheck,
  ClipboardList,
  GraduationCap
} from "lucide-react";

const iconMap = {
  wrench: Wrench,
  settings: Settings,
  headphones: Headphones,
  shield: ShieldCheck,
  clipboard: ClipboardList,
  "graduation-cap": GraduationCap
};

export   function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
    
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Comprehensive Support & Services
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            From installation to maintenance, we provide end-to-end services to ensure your power systems operate at peak performance.
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border 
                transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 mb-4">
                  <Icon className="text-green-600" size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {service.desc}
                </p>

                <button className="mt-4 text-green-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
