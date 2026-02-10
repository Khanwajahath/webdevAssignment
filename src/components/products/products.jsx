 import { products } from  "../../../products.js";  

 
export   function Products() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16" id="products">
              <div className="text-center mb-12">
        <p className="text-emerald-600 text-sm font-semibold uppercase tracking-wide">
          Our Product Range
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Premium Power Equipment & Energy Solutions
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our comprehensive range of high-quality inverters, batteries, UPS systems, and solar products designed for reliability and performance.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transform transition duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Title + Description on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-3  ">
              <ul className="text-sm text-gray-800  ">
                {product.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-500 text-lg">●</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-4 w-full rounded bg-green-500 py-2 text-white font-semibold hover:bg-green-600 transition">
                Get Best Price Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
