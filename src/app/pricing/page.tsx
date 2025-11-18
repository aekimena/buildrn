"use client";

import Footer from "@/componets/common/Footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const pricingModels = [
  {
    plan: "Free",
    price: 0,
    description: "For hobbyists and early-stage developers.",
    benefits: [
      "50 Builder Credits / month",
      "Access to basic UI components",
      "Single-screen layout generation",
      "Community support",
    ],
    buttonText: "Get started",
    onButtonPress: () => {
      console.log("pressed free");
    },
  },
  {
    plan: "Premium",
    price: 29,
    description: "For startups and indie developers building real apps.",
    benefits: [
      "200 Builder Credits / month",
      "Access to advanced templates (multi-screen flows)",
      "Up to 10-screen app generation",
      "Theme & field customization",
      "Basic API integration",
      "State management boilerplate",
      "Export clean, production-ready code",
      "Priority support",
    ],
    buttonText: "Select plan",
    onButtonPress: () => null,
  },
  {
    plan: "Pro",
    price: 49,
    description: "For teams and power users building full-featured apps.",
    benefits: [
      "500 Builder Credits / month",
      "Access to all templates and components",
      "Unlimited screen flows and scaffolds",
      "Real-time features (WebSocket integration)",
      "Back-end features (auth, DB setup, APIs)",
      "Live chat with dev support",
      "Code review by senior developer",
    ],
    buttonText: "Select plan",
    onButtonPress: () => null,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white px-24">
      <div className="pt-20 gap-y-5 flex flex-col items-center">
        <p className="text-center font-medium text-base text-indigo-600">
          Pricing
        </p>
        <p className="text-center font-bold text-5xl text-gray-900">
          Pricing that grows with you
        </p>
        <p className="text-center font-medium text-xl text-gray-500 w-2xl">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <div className="pt-5 flex flex-row items-start justify-between">
        {pricingModels.map((i, index) => (
          <div className="flex-1 p-15" key={index}>
            <div className="flex flex-col gap-y-7">
              <p className="text-base text-gray-800 font-semibold">{i.plan}</p>
              <p className="text-5xl text-gray-900 font-bold">
                ${i.price}{" "}
                <span className="text-base text-gray-500 font-semibold">
                  /month
                </span>
              </p>
            </div>
            <div className="mt-10">
              <button
                className="w-full bg-indigo-600 text-white py-2  rounded-md hover:bg-indigo-700 transition"
                onClick={() => i.onButtonPress()}
              >
                <p>{i.buttonText}</p>
              </button>
            </div>
            <p className="mt-5 text-sm text-gray-900 font-semibold">
              {i.description}
            </p>
            <div className="mt-5 flex flex-col gap-y-3">
              {i.benefits.map((b, index) => (
                <div className="flex flex-row gap-x-2 items-center" key={index}>
                  <CheckCircleIcon className="size-5 text-indigo-600" />
                  <p className="text-sm text-gray-500 font-medium">{b}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
