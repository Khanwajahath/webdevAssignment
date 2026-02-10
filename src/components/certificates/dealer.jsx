 import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.json'
import { certifications } from "../../../certifications.js";
export   function Dealer() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16" id="certificate">
        <div className="text-center mb-12">
        <p className="text-emerald-600 text-sm font-semibold uppercase tracking-wide">
          Trust & Credibility
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Dealer Certificates & Accreditations
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our certifications and awards reflect our commitment to quality, reliability, and customer satisfaction in the power solutions industry.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Year badge */}
              <span className="absolute right-3 top-3 rounded-full bg-white px-2 py-0.5 text-xs font-medium shadow">
                {item.year}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full   text-green-400 text-xs">
                 <i className="bi bi-patch-check-fill text-2xl"></i>

                </span>
                <h3 className="text-sm font-semibold">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium pt-1">
                <span>✔</span>
                Verified Certificate
              </div>
            </div>
          </div>
        ))}
      </div>
    <section className="w-full px-4 py-12">
      <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-green-600 to-green-600 px-6 py-14 text-center text-white shadow-lg">
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Join Our Trusted Dealer Network
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-emerald-50">
          Become an authorized dealer and grow your business with India&apos;s leading
          power solutions manufacturer.
        </p>

        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-2 rounded  bg-white px-6 py-3 font-semibold text-green-700 hover:bg-emerald-50 transition">
            Become a Dealer
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
</svg>
</span>
          </button>
        </div>

      </div>
    </section>
    </section>
  );
}
