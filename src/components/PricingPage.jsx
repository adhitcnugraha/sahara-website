import React from "react";
import Landscape3 from "../assets/landscape/landscape3.png";
import Card from "./Card";

const plans = [
  {
    title: "Ruby Package",
    price: "450K",
    features: [
      { text: "1 hour photo session", included: true },
      { text: "1 Location photo session", included: true },
      { text: "Photo with family (Max 3 person)", included: true },
      { text: "40 edited photos", included: true },
      { text: "All soft file via google drive", included: true },
    ],
  },
  {
    title: "Emerald Package",
    price: "800K",
    features: [
      { text: "2 Hour photo session", included: true },
      { text: "Unlimited shoot & location", included: true },
      { text: "Photo with family (Max 5 person)", included: true },
      { text: "60 edited photos", included: true },
      { text: "All soft file via google drive", included: true },
      { text: "Free video 1 minute", included: true },
    ],
  },
  {
    title: "Diamond Package",
    price: "1.1M",
    features: [
      { text: "3 hours photo session", included: true },
      { text: "Unlimited shoot & location", included: true },
      { text: "Photo with family (Max 10 person)", included: true },
      { text: "All edited photos", included: true },
      { text: "All soft file via google drive", included: true },
      { text: "Free video 1 minute", included: true },
    ],
  },
];

const PricingPage = () => (
  <section
    className="relative min-h-screen p-10 text-white bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${Landscape3})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50 z-0" />

    <div className="relative z-10">
      <h1 className="text-5xl font-bold mb-10 text-center tracking-wide">
        Pricelist
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <Card key={index} {...plan} />
        ))}
      </div>
    </div>
  </section>
);

export default PricingPage;
