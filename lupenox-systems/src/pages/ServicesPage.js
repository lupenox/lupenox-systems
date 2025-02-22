import React from "react";

const services = [
  {
    title: "Website Security Audit",
    description: "We scan your website for vulnerabilities and provide a security report.",
    price: "$50+",
    buttonText: "Get a Quote"
  },
  {
    title: "Basic Penetration Testing",
    description: "We test your website for common security flaws and suggest fixes.",
    price: "Custom Pricing",
    buttonText: "Get a Quote"
  },
  {
    title: "Website Development",
    description: "Fast, modern, and secure websites built with React or WordPress.",
    price: "$300+",
    buttonText: "Book Now"
  },
  {
    title: "Custom Automation & AI Bots",
    description: "We build automation scripts for your business needs.",
    price: "Custom Pricing",
    buttonText: "Get a Quote"
  },
  {
    title: "Linux Server Hardening",
    description: "We secure your VPS against attacks and configure SSH properly.",
    price: "$75+",
    buttonText: "Book Now"
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <p className="text-lg font-bold text-green-400 mb-4">{service.price}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
