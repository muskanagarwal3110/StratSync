import {
  FaExclamationTriangle,
  FaDollarSign,
  FaClock,
  FaChartLine,
  FaUsers,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

const useCases = [
  {
    icon: <FaExclamationTriangle className="text-white text-xl" />,
    title: "Churn Risk Detection",
    subtitle: "Trading Platform",
    desc: "A commodities trading client shows declining API usage and missed SLA thresholds. StratSync alerts the CS team 30 days before contract renewal with specific retention actions.",
    stat: "✓ 85% success rate in retaining at-risk accounts",
  },
  {
    icon: <FaDollarSign className="text-white text-xl" />,
    title: "Billing Anomaly Recovery",
    subtitle: "Logistics Provider",
    desc: "Freight invoices with 60+ day delays trigger automated workflows. StratSync coordinates between collections, ops, and CS to resolve disputes and recover $2M+ in overdue revenue.",
    stat: "✓ 40% faster collections resolution",
  },
  {
    icon: <FaClock className="text-white text-xl" />,
    title: "SLA Breach Prevention",
    subtitle: "Supply Chain Operations",
    desc: "Critical shipment delays detected across multiple accounts. StratSync prioritizes CS interventions and proactive client communication before SLA penalties kick in.",
    stat: "✓ 70% reduction in SLA breach incidents",
  },
  {
    icon: <FaChartLine className="text-white text-xl" />,
    title: "Account Health Scoring",
    subtitle: "B2B Services",
    desc: "AI combines usage data, payment history, and support tickets to identify accounts sliding toward churn. CS teams get weekly action plans prioritized by revenue impact.",
    stat: "✓ 25% improvement in retention rates",
  },
  {
    icon: <FaUsers className="text-white text-xl" />,
    title: "Cross-sell Opportunities",
    subtitle: "Multi-Service Provider",
    desc: "High-performing accounts using only basic services get flagged for expansion. StratSync suggests optimal timing and approach based on account health and engagement patterns.",
    stat: "✓ 30% increase in expansion revenue",
  },
  {
    icon: <FaFileAlt className="text-white text-xl" />,
    title: "Contract Renewal Intelligence",
    subtitle: "Project-Based Services",
    desc: "90 days before contract expiration, StratSync analyzes project performance, billing accuracy, and relationship health to guide renewal strategy and pricing discussions.",
    stat: "✓ 92% renewal rate for managed accounts",
  },
];

export default function UseCasesSection() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
        Real-World Use Cases
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
        See how StratSync transforms customer success operations across
        logistics, trading, and complex B2B industries
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {useCases.map((useCase, i) => (
          <div
            key={i}
            className="bg-[#f9fcfc] p-6 rounded-2xl text-left shadow-sm border hover:shadow-md transition"
          >
            <div className="flex flex-row justify-start items-center gap-4">
              <div className="bg-gradient-to-r from-[#0b4c71] to-[#3a9b84] w-fit p-3 rounded-lg mb-4">
                {useCase.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900">
                {useCase.title}
              </h3>
              <div className="text-sm text-[#1f626c] bg-[#ccd9d4] w-fit px-3 py-1 rounded-full mt-1 mb-3 font-medium">
                {useCase.subtitle}
              </div>
              </div>
              
            </div>

            <p className="text-gray-700 text-sm mb-4">{useCase.desc}</p>
            <div className="border-t pt-3">
              <p className="text-green-700 bg-green-50 text-sm p-2 rounded-md font-semibold w-fit">
                {useCase.stat}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-lg mt-16 mb-4">
        Ready to see how StratSync can transform your customer success
        operations?
      </p>

      <button className="bg-[#007c91] hover:bg-[#1f626c] text-white text-sm font-semibold px-4 py-3 rounded-md">
        Explore Your Use Case 
        <FaArrowRight className="hidden sm:inline-block text-sm mx-2" />
      </button>
    </section>
  );
}
