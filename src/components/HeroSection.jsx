// HeroSection.jsx
import { motion } from "framer-motion";
import { FaUsers, FaRobot, FaChartLine, FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#f9fbff] to-[#fdf9ff]">
      <div className="absolute top-6 left-6">
        <img src={logo} alt="StratSync Logo" className="sm:h-10 h-8 w-auto" />
      </div>
      <motion.div
        className="mb-4 px-4 py-1 rounded-full bg-[#acc7bc] text-[#1f626c] text-md font-medium mt-24 sm:mt-0"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-row justify-between items-center gap-3">
          <FaRobot className="text-2xl" />
          <span>AI-Powered Revenue Retention</span>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl font-bold leading-tight mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Your Revenue Retention <br />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-[#1f626c]">
          Copilot for Customer Success
        </span>
      </motion.h1>

      <motion.p
        className="text-gray-600 max-w-4xl text-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Agentic AI that empowers CS teams to detect risks early, retain more
        revenue, and drive better customer outcomes in complex B2B operations.
      </motion.p>

      <motion.div
        className="flex gap-4 text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <button className="bg-[#007c91] text-white px-2 sm:px-8 py-2 rounded-md hover:bg-[#1f626c] transition flex items-center gap-2">
          Book a Demo
          <FaArrowRight className="hidden sm:inline-block text-sm" />
        </button>
        <button className="border border-gray-300 px-2 sm:px-6 py-2 rounded-md hover:bg-[#bbd0d3] transition">
          Join Waitlist
        </button>
      </motion.div>

      <motion.div
        className="flex gap-3 sm:gap-6 mt-14 text-sm text-gray-600 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <div className="flex flex-col items-center text-gray-600">
          <div className="bg-[#ccd9d4] rounded-md w-14 h-14 flex items-center justify-center shadow-sm">
            <FaUsers className="text-2xl text-[#1f626c]" />
          </div>
          <span className="mt-2">CRM Data</span>
        </div>

        <FaArrowRight className="text-xl text-gray-400 mb-5" />
        <div className="flex flex-col items-center text-gray-600">
          <div className="bg-[#bbd0d3] rounded-md w-14 h-14 flex items-center justify-center shadow-sm">
            <FaRobot className="text-2xl text-[#007c91]" />
          </div>
          <span className="mt-2">StratSync AI</span>
        </div>
        <FaArrowRight className="text-xl text-gray-400 mb-5" />
        <div className="flex flex-col items-center text-gray-600">
          <div className="bg-[#ededed] rounded-md w-14 h-14 flex items-center justify-center shadow-sm">
            <FaChartLine className="text-2xl text-[#517265]" />
          </div>
          <span className="mt-2">Insights</span>
        </div>
      </motion.div>
    </div>
  );
}
