import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaClipboardList,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

const Workflow = () => {
  const steps = [
    {
      icon: FaComments,
      title: "Discuss with Clients",
      desc: "We begin by understanding your needs, space, and style preferences to shape a personalized plan.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaClipboardList,
      title: "Detail Planning",
      desc: "Our design experts curate materials and layout for your dream kitchen setup.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaTruck,
      title: "Delivery & Setup",
      desc: "Fast and careful delivery ensures your products arrive safely, ready for setup.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaCheckCircle,
      title: "Perfect Completion",
      desc: "Final arrangement, detailing, and satisfaction check — all within 2 working days.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,196,120,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Our Refined{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the elegance of precision — from the first conversation to your completed kitchen in just two days.
          </p>
        </motion.div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Line connector */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-yellow-200 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector dot */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-[-32px] w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 shadow-md"></div>
                )}

                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  
                  {/* Removed step number */}

                  {/* Icon */}
                  <div className="mb-5 flex justify-center">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl`}
                    >
                      <step.icon className="text-3xl" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Glow Ring */}
                  <div
                    className={`absolute inset-0 rounded-3xl ring-0 hover:ring-4 ring-orange-300/20 transition-all duration-500`}
                  ></div>

                  {/* Shine overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Accent Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-orange-100/30 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Workflow;
