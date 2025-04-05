import React from "react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Facial Implants",
      description: "Mauris cursus posuere sem non mentum donec condime ntumut",
      img: "https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Dimples_surgery.png",
    },
    {
      title: "Eye Bag Removal",
      description: "Mauris cursus posuere sem non mentum donec condime ntumut",
      img: "https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Eye_Bag-1.png",
    },
    {
      title: "Buttock Augmentation",
      description: "Mauris cursus posuere sem non mentum donec condime ntumut",
      img: "https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Buttock_augmentation_2.png",
    },
    {
      title: "Lip Injections",
      description: "Mauris cursus posuere sem non mentum donec condime ntumut",
      img: "https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Lip_Injections.png",
    },
    {
      title: "Breast Implants",
      description: "Mauris cursus posuere sem non mentum donec condime ntumut",
      img: "https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Breast_implants.png",
    },
    {
      title: "Rhinoplasty",
      description: "Mauris cursus posuere sem non mentum donec condime ntumut",
      img: "https://kinforce.net/qurux/wp-content/uploads/2021/05/elements-70-plastic-surgery-elements-5MGUA28_Dimples_surgery.png",
    },
  ];

  return (
    <div className="bg-white pt-20 pb-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#f8b1b0] font-grechen">Services</h2>
        <h1 className="text-2xl font-lora mt-2">Services We Offer</h1>
      </div>

      {/* Responsive Grid Layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {/* Left Services */}
        <div className="flex flex-col gap-10">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} align="right" />
          ))}
        </div>

        {/* Center Image (Only on Large Screens) */}
        <div className="hidden lg:flex justify-center items-center">
          <img
            className="w-full max-w-xs h-auto object-cover transition-opacity duration-500 opacity-100 sm:opacity-80 md:opacity-70 lg:opacity-100"
            src="https://kinforce.net/qurux/wp-content/uploads/2021/05/beautiful-woman-with-perfect-body-and-legs-SHGP7DQ.png"
            alt="Main"
          />
        </div>

        {/* Right Services */}
        <div className="flex flex-col gap-10">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index} service={service} align="left" />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual Service Card Component
const ServiceCard = ({ service, align }:any) => {
  return (
    <div className={`flex flex-col items-${align === "right" ? "end" : "start"} text-${align}`}>
      <div className="h-24 w-24 mb-3">
        <img className="w-full h-full object-contain" src={service.img} alt={service.title} />
      </div>
      <div className="w-full">
        <h1 className="font-lora text-xl">{service.title}</h1>
        <p className="text-lg text-gray-700 pt-2">{service.description}</p>
      </div>
    </div>
  );
};
