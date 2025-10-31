import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaClipboardList,
  FaTruck,
  FaCheckCircle,
  FaUser,
  FaBoxOpen,
} from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";

const Workflow = () => {
  const steps = [
    {
      icon: FaUser,
      title: "Personalized Order",
      desc: "Simply contact us, and we'll visit you to assist with your selection and order - or place it directly through out website",
      color: "from-sky-500 to-indigo-500",
    },
   
    {
      icon: GiDiscussion,
      title: "Design Assistance",
      desc: "We help you choose products that perfectly match your space, theme , and aesthetics.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaBoxOpen,
      title: "Order Preparation",
      desc: "We prepare and organize you choosen items for smooth, secure delivery.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaTruck,
      title: "Delivery & Setup",
      desc: "Fast, careful delivery ensures everything is arranged and installed professionally.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaClipboardList,
      title: "On-Time Product Completion",
      desc: "Every product is completed within the promised timeline-combining speed and perfection.",
      color: "from-pink-500 to-fuchsia-500",
    },
    
    
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Base Section Glow (upgraded) */}
      <div className="absolute left-0 right-0 top-[-120px] h-[320px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute left-[10%] bottom-[-8rem] w-[34vw] h-[24vw] min-h-[270px] min-w-[260px] max-w-[440px] max-h-[440px]  pointer-events-none z-0"></div>
      {/* Main Background Glow */}
      <div className="absolute inset-0  pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="sm:text-left text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4 drop-shadow-xl font-sans">
            Our Refined{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mt-3 mx-auto sm:mx-0">
            Experience the elegance of precision — from the first conversation to your completed kitchen in just two days.
          </p>
        </motion.div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Line connector */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-yellow-200 to-transparent transform -translate-y-1/2 hidden lg:block z-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-9 md:gap-10 justify-items-center items-stretch">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: idx * 0.16, type: 'spring', bounce: 0.34 }}
                viewport={{ once: true }}
                className="relative w-full flex"
              >
                {/* Connector dot */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-[-28px] w-5 h-5 rounded-full bg-gradient-to-r from-orange-400/60 to-yellow-200/70 shadow-lg opacity-40 z-30"></div>
                )}
                {/* Modern Card */}
                <div className="group relative w-full bg-white/70 backdrop-blur-2xl border border-orange-100/50 rounded-[2.1rem] p-8 pt-14 shadow-lg hover:shadow-orange-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-visible hover:border-orange-200/70 before:absolute before:inset-0 before:rounded-[2.1rem] before:z-[-1] before:bg-gradient-to-tr before:from-white/55 before:via-orange-100/50 before:to-orange-50/10 before:opacity-70">
                  {/* Glow behind icon */}
                  <span className="absolute left-1/2 top-8 -translate-x-1/2 blur-2xl w-24 h-24 rounded-full" style={{background:`linear-gradient(135deg, ${step.color.replace('from-','').replace('to-','')}, #fff1 80%)`, opacity:0.39, zIndex:0}}></span>
                  {/* Step Number Badge */}
                  <span className="absolute top-3 left-5 bg-gradient-to-r from-orange-400/90 to-yellow-200/80 text-white text-sm font-bold px-5 py-1.5 rounded-xl shadow-lg ring-2 ring-yellow-200/50 backdrop-blur-[4px] transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-orange-400 group-hover:bg-opacity-90 select-none cursor-pointer">
                    {`Step ${idx + 1}`}
                  </span>
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-2xl group-hover:shadow-orange-200 group-hover:scale-105 transition-all duration-500 z-20 after:absolute after:inset-0 after:rounded-full after:bg-white/10 after:blur-lg after:opacity-75`}
                      style={{filter:'drop-shadow(0 0 24px rgba(255,180,0,0.12))'}}
                    >
                      {/* Animated Ring */}
                      <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white group-hover:ring-4 group-hover:ring-yellow-300/25 transition-all duration-500 animate-pulse z-0"></span>
                      <step.icon className="text-4xl relative z-10 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300" />
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center tracking-tight drop-shadow-[0_1.5px_7px_rgba(243,95,50,0.01)]">
                    {step.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-500 text-base sm:text-lg text-center leading-relaxed max-h-[4.5em] line-clamp-3 mx-auto">
                    {step.desc}
                  </p>
                  {/* Shine overlay */}
                  <div className="absolute inset-0 rounded-[2.1rem] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Accent Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-orange-100/60 via-transparent to-transparent pointer-events-none z-0"></div>
    </section>
  );
};

export default Workflow;
