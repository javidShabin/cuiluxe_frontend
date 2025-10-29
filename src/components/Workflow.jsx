import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaClipboardList, FaTruck, FaCheckCircle } from "react-icons/fa";

const Workflow = () => {
  const steps = [
    {
      icon: FaComments,
      title: "Discuss with Clients",
      desc: "Understanding your needs and preferences",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      ringColor: "ring-blue-300",
    },
    {
      icon: FaClipboardList,
      title: "Detail Planning",
      desc: "Customized plan for your perfect kitchen",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      ringColor: "ring-purple-300",
    },
    {
      icon: FaTruck,
      title: "Delivery Product",
      desc: "Safe and timely delivery to your doorstep",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      ringColor: "ring-orange-300",
    },
    {
      icon: FaCheckCircle,
      title: "Timing Completion",
      desc: "Perfect setup and finishing touches",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      ringColor: "ring-green-300",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
            PROJECT COMPLETION IN{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              2 WORKING DAYS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Connector Line (Desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-200 to-transparent -z-10">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-300 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-500"></div>
                </div>
              )}

              {/* Step Card */}
              <div
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 ${step.borderColor} group-hover:border-opacity-100 cursor-pointer overflow-hidden`}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-gray-900 group-hover:to-gray-800 flex items-center justify-center transition-all duration-500">
                  <span className="text-sm font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                    {idx + 1}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`relative w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <step.icon
                      className={`text-4xl ${step.iconColor} group-hover:scale-110 transition-transform duration-500`}
                    />
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    ></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-gray-800 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm text-gray-600 text-center leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500`}
                >
                  {step.desc}
                </p>

                {/* Premium Ring Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl ring-0 ${step.ringColor}/0 group-hover:ring-4 ${step.ringColor}/40 transition-all duration-500 pointer-events-none`}
                ></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;

