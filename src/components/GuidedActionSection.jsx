import { FaSearch, FaRobot, FaBolt } from "react-icons/fa";

export default function GuidedActionSection() {
  const cards = [
    {
      icon: (
        <FaSearch className="text-[#1f626c] text-xl group-hover:text-white" />
      ),
      title: "Signal Engine",
      desc: "Detect early churn, billing anomalies, and SLA breaks before they impact revenue",
    },
    {
      icon: (
        <FaRobot className="text-[#1f626c] text-xl group-hover:text-white" />
      ),
      title: "Agentic Playbooks",
      desc: "CS agents prioritize the right actions automatically with AI-driven workflows",
    },
    {
      icon: (
        <FaBolt className="text-[#1f626c] text-xl group-hover:text-white" />
      ),
      title: "System Integrator",
      desc: "Seamlessly connects CRM, billing, ticketing, and ops into one intelligence layer",
    },
  ];

  return (
    <section className="py-20 px-6 text-center scroll-mt-20">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        From Guesswork to{" "}
        <span className="bg-gradient-to-r from-[#043b5c] to-[#34a387] text-transparent bg-clip-text">
          Guided Action
        </span>
      </h2>

      <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
        StratSync brings agentic AI into your customer success stack to surface
        signals and suggest actions—before revenue slips away.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow-sm hover:border hover:bg-[#f3f9fa] group transition-all duration-300 hover:shadow-md"
          >
            <div className="bg-[#ccd9d4] group-hover:bg-[#1f626c] p-3 rounded-md w-fit mx-auto mb-4 transition-colors duration-300">
              {card.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
