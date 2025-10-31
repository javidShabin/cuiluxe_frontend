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
      color: "from-emerald-500 to-teal-500",
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
      color: "from-green-500 to-emerald-500",
    },
    
    
  ];

  return (
    <section className="relative py-28 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Enhanced Background Glows */}
      <div className="absolute left-0 right-0 top-[-100px] h-[400px] bg-gradient-to-b from-orange-50/40 via-transparent to-transparent rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute right-[10%] bottom-[-100px] w-[500px] h-[400px] bg-gradient-to-br from-yellow-50/30 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute left-[5%] top-1/2 w-[300px] h-[300px] bg-gradient-to-br from-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="sm:text-left text-center mb-20"
        >
          <h2 className="text-4xl text-center sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4 drop-shadow-xl font-sans">
            Project Completion in {" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Just 2 Days
            </span>
          </h2>
          
          {/* Enhanced Day Cards */}
          <div className="flex justify-center">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl ring-1 ring-gray-200/80 hover:ring-blue-200 transition-all duration-300">
                  <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md ring-2 ring-blue-100">
                    Day 1
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-md ring-2 ring-blue-100">
                      <FaClipboardList className="text-xl" />
                    </span>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 font-medium mb-1">Collection order</p>
                      <p className="text-sm font-semibold text-gray-800 leading-tight">Confirm specs and finalize selection</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl ring-1 ring-gray-200/80 hover:ring-emerald-200 transition-all duration-300">
                  <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md ring-2 ring-emerald-100">
                    Day 2
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-md ring-2 ring-emerald-100">
                      <FaTruck className="text-xl" />
                    </span>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 font-medium mb-1">Delivery & setup</p>
                      <p className="text-sm font-semibold text-gray-800 leading-tight">Fast delivery and professional installation</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
        </motion.div>

        {/* Enhanced Timeline Flow */}
        <div className="relative">
          {/* Improved Timeline Connector */}
          <div className="absolute top-[120px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-transparent via-orange-300/40 via-yellow-300/40 to-transparent transform -translate-y-1/2 hidden xl:block z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-yellow-200/40 to-orange-200/30 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center items-stretch">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.15, 
                  type: 'spring', 
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative w-full flex justify-center"
              >
                {/* Enhanced Connector Dot */}
                {idx < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-[120px] right-[-32px] w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 shadow-lg ring-4 ring-white z-30 animate-pulse"></div>
                )}
                
                {/* Enhanced Modern Card */}
                <div className="group relative w-full max-w-[280px] bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-3xl p-6 pt-16 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  {/* Subtle gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Enhanced glow behind icon */}
                  <div 
                    className={`absolute left-1/2 top-16 -translate-x-1/2 blur-3xl w-32 h-32 rounded-full bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0`}
                  ></div>
                  
                  {/* Enhanced Step Number Badge */}
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg ring-2 ring-orange-200/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:ring-orange-300 select-none">
                    {`Step ${idx + 1}`}
                  </span>
                  
                  {/* Enhanced Icon Container */}
                  <div className="mb-5 flex justify-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-500 z-20`}
                      style={{
                        filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'
                      }}
                    >
                      {/* Animated glow ring */}
                      <span className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-500"></span>
                      <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <step.icon className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  
                  {/* Enhanced Description */}
                  <p className="text-gray-600 text-sm leading-relaxed text-center min-h-[3.5rem]">
                    {step.desc}
                  </p>
                  
                  {/* Enhanced shine overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Bottom Accent Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-50/40 via-transparent to-transparent pointer-events-none z-0"></div>
    </section>
  );
};

export default Workflow;
