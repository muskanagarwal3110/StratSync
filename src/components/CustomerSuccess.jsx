import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExclamationTriangle, FaTimes, FaFileAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function CustomerSuccess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <FaExclamationTriangle className=" text-[#1f626c] text-xl" />,
      title: "Signals buried in silos",
      desc: "Critical data scattered across CRM, ticketing, and billing systems",
    },
    {
      icon: <FaTimes className=" text-[#1f626c] text-xl" />,
      title: "No visibility into billing issues",
      desc: "Risk-prone accounts and overdue collections go unnoticed",
    },
    {
      icon: <FaFileAlt className=" text-[#1f626c] text-xl" />,
      title: "Spreadsheets & firefighting",
      desc: "Manual processes lead to retention roulette and reactive responses",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-[#f6fcfc] py-20 px-6 text-center scroll-mt-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Customer Success is Broken
        <span className="text-[#007c91]"> in Complex Ops</span>
      </h2>

      <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
        In logistics, trading, and B2B operations, CS teams manage 25–30
        accounts. They're drowning in dashboards, chasing overdue collections,
        and reacting to churn too late.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm border"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-[#ccd9d4] p-3 rounded-md w-fit mx-auto mb-4">
              {card.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
