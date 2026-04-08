"use client";

import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "Patna Headquarters",
    address:
      "First Floor, Siyaram Mention, opposite Telephone Exchange, near P&M Mall, Kurji, Patna, Bihar",
    pin: "800001",
    phone: "+91 9973725719",
    time: "9:00 AM - 7:00 PM",
  },
  {
    name: "Noida Office",
    address:
      "G 94 (Basement), G Block, Sector 63, Noida, Uttar Pradesh",
    pin: "201301",
    phone: "+91 9973725719",
    time: "9:00 AM - 7:00 PM",
  },
];

export default function ContactPage() {
  const [selected, setSelected] = useState(locations[0]);

  return (
    <div className="min-h-screen bg-[#eef1f6]">

      {/* ================= HEADER ================= */}
      <section className="text-center pt-20 pb-16">
        <h1 className="text-5xl font-bold text-indigo-600">
          Get In Touch
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          We're available across India! Choose your nearest location and let's create something amazing together.
        </p>
      </section>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-12 gap-8">

        {/* ===== LEFT PANEL ===== */}
        <div className="lg:col-span-4 bg-white rounded-3xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center relative">
            Our Locations
            <span className="block w-16 h-1 bg-red-500 mx-auto mt-2 rounded"></span>
          </h2>

          <div className="mt-8 space-y-5">
            {locations.map((loc, index) => (
              <div
                key={index}
                onClick={() => setSelected(loc)}
                className={`p-5 rounded-2xl border cursor-pointer transition ${
                  selected.name === loc.name
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {loc.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {loc.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT PANEL ===== */}
        <div className="lg:col-span-8 bg-white rounded-3xl shadow-md p-10">

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 relative inline-block">
              {selected.name}
              <span className="block w-20 h-1 bg-red-500 mx-auto mt-2 rounded"></span>
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mb-8">
            <a
              href={`tel:${selected.phone}`}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium"
            >
              Call
            </a>
            <a
              href="mailto:support@vidyadayini.com"
              className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium"
            >
              Email
            </a>
            <a
              href="https://wa.me/919973725719"
              target="_blank"
              className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium"
            >
              WhatsApp
            </a>
          </div>

          {/* Details */}
          <div className="space-y-6 text-gray-700">

            <div className="flex items-center gap-3">
              <Clock className="text-blue-600" size={18} />
              <span>{selected.time}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" size={18} />
              <div>
                <p>{selected.address}</p>
                <p className="font-semibold mt-1">PIN: {selected.pin}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-green-600" size={18} />
              <span>{selected.phone}</span>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-10 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Patna,Bihar&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}