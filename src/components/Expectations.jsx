import { FaArrowUp, FaClock, FaDollarSign, FaBell } from "react-icons/fa";

const expectations = [
  {
    icon: <FaArrowUp className="text-white text-xl" />,
    stat: "20%",
    title: "Higher retention",
    desc: "of at-risk accounts through early intervention",
  },
  {
    icon: <FaClock className="text-white text-xl" />,
    stat: "40%",
    title: "Faster CS response",
    desc: "on critical tickets and customer issues",
  },
  {
    icon: <FaDollarSign className="text-white text-xl" />,
    stat: "Better",
    title: "Revenue alignment",
    desc: "between collections, ops & customer success",
  },
  {
    icon: <FaBell className="text-white text-xl" />,
    stat: "Real-time",
    title: "Proactive alerts",
    desc: "not post-mortems and reactive firefighting",
  },
];

export default function Expectations() {
  return (
    <section className="bg-[#f6fcfc] py-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
        What You Can Expect
      </h2>
      <p className="text-gray-600 text-xl mb-12">
        Real results from CS teams using StratSync AI
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {expectations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl py-8 px-4 shadow-sm border text-center"
          >
            <div className="bg-gradient-to-r from-[#0b4c71] to-[#3a9b84] w-fit mx-auto p-3 rounded-lg mb-4">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{item.stat}</h3>
            <p className="text-md font-semibold text-gray-800 mb-1">
              {item.title}
            </p>
            <p className="text-sm text-gray-600 max-w-[200px] mx-auto">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
