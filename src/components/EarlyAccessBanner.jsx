import { FaMagic, FaArrowRight } from "react-icons/fa";

export default function EarlyAccessBanner() {
  return (
    <section className="bg-gradient-to-r from-[#043b5c] to-[#34a387] text-white text-center py-20 px-4">
      <div className="inline-block bg-white/10 text-sm text-white px-4 py-1 rounded-full mb-6">
        <span className="inline-flex items-center gap-2">
          <FaMagic className="w-4 h-4" />
          Limited Early Access
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        We’re Live with Select Customers
      </h2>
      <p className="text-lg text-white/90 max-w-xl mx-auto mb-6">
        We’re onboarding high-growth CS teams in logistics, trading, and project-led industries. Want to be next?
      </p>
      <button className="bg-white text-[#043b5c] hover:bg-gray-100 font-medium py-3 px-6 rounded-md shadow transition inline-flex items-center gap-2">
        <span>Book Early Access Demo </span>
        <FaArrowRight className="w-4 h-4 mt-1" />
      </button>
    </section>
  );
}
