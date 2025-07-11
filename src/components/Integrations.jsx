export default function Integrations() {
  const tools = [
    "Slack",
    "Salesforce",
    "HubSpot",
    "Zendesk",
    "Xero",
    "NetSuite",
    "Zoho",
    "Microsoft Teams",
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Works with What You Already Use
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto">
        Seamlessly integrates with your existing customer success stack
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="bg-[#f4f8f7] hover:bg-[#e6eeec] hover:shadow-sm text-gray-800 font-medium rounded-lg py-3 px-4 transition-colors duration-200 flex justify-center text-center"
          >
            {tool}
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-md mt-10">
        Don't see your stack?{" "}
        <a href="#" className="text-[#00677a] font-medium hover:underline">
          Talk to us
        </a>{" "}
        about custom integrations.
      </p>
    </section>
  );
}
