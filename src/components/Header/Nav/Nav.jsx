import { useState } from "react";

const menu = ["Home", "About Us", "Products", "Dealer Certificates", "Services", "Contact Us"];

export default function Navbar() {
  const [active, setActive] = useState(null); // null = no hover

  return (
    <div
      className="relative inline-flex bg-blue-400 rounded-lg p-1 "
      onMouseLeave={() => setActive(null)}   // hide highlight when leaving menu
    >
      {/* Sliding highlight */}
      {active !== null && (
        <div
          className="absolute top-1 bottom-1 bg-green-100 rounded-md transition-all duration-300"
          style={{
            width: `${80 / menu.length}%`,
            left: `${(80 / menu.length) * active}%`,
          }}
        />
      )}

      {menu.map((item, i) => (
        <button
          key={item}
          onMouseEnter={() => setActive(i)}  // move highlight on hover
          className="relative z-10 px-4 py-1 rounded-md"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
