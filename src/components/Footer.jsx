import { FaEnvelope, FaLinkedin, FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#153e44] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[3fr_1fr_1fr] gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">StratSync.ai</h3>
          <p className="text-md text-white/80 mb-4">
            Your revenue retention copilot for customer success teams in complex
            B2B operations.
          </p>
          <div className="flex gap-6 text-lg text-white/70">
            <a href="#" className="hover:text-white flex items-center gap-2">
              <FaEnvelope className="w-4 h-4" /> Contact Us
            </a>
            <a href="#" className="hover:text-white flex items-center gap-2">
              <FaLinkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-md text-white/80">
            <li>
              <a href="#" className="hover:text-white">
                Signal Engine
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Agentic Playbooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-md text-white/80">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center gap-1 text-sm text-white/50 mt-10 border-t border-white/10 pt-6">
        <FaRegCopyright className="w-3 h-3" />
        <span>2024 StratSync.ai. All rights reserved.</span>
      </div>
    </footer>
  );
}
