import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export   function RequestQuote() {
  return (
    <section className="py-20 bg-white" id="touch">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Request a Quote Today
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Share your requirements and our team will get back to you with the best pricing and solutions.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 border hover:shadow-2xl transition-all duration-300">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none 
                  focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none 
                  focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none 
                  focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Product Interest
                </label>
                <select
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none 
                  focus:ring-2 focus:ring-green-500"
                >
                  <option>Select a product</option>
                  <option>Inverter</option>
                  <option>Battery</option>
                  <option>Solar Panel</option>
                  <option>UPS</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Your Requirements *
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your requirements in detail..."
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none 
                  focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 
                  bg-gradient-to-r from-green-500 to-emerald-600 
                  text-white font-semibold py-3 rounded  
                  hover:shadow-2xl hover:scale-[1.01] transition-all"
                >
                  <Send size={18} />
                  Get Best Price Now
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="bg-gradient-to-b from-green-600 to-emerald-700 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-5">
              <InfoRow icon={<MapPin />} title="Our Address" value="Mundka, New Delhi, Delhi" />
              <InfoRow icon={<Phone />} title="Phone Number" value="+91-8045910957" />
              <InfoRow icon={<Mail />} title="Email Address" value="info@powersolutionsfactory.in" />
              <InfoRow icon={<Clock />} title="Business Hours" value="Mon - Sat: 9:00 AM - 7:00 PM" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex justify-between mb-2 text-sm">
                <span>Response Rate</span>
                <span className="font-semibold">94%</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-white rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-white/20">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm opacity-90">{value}</p>
      </div>
    </div>
  );
}
