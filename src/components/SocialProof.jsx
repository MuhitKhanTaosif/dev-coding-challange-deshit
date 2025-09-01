import mockData from "../data/mockData.json";

function Company({ title, logo }) {
  return (
    <div className="flex items-center gap-3 p-4">
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt={`${title} logo`}
          className="w-12 h-12 object-contain "
        />
      </div>
      <span className="text-gray-900 font-bold sm:text-xl">{title}</span>
    </div>
  );
}

export default function SocialProof() {
  const companies = mockData.companyList;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-gray-600 text-sm sm:text-base font-medium">
          Join 4,000+ companies already growing
        </p>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {companies.map((company) => (
          <Company
            key={company.id}
            title={company.title}
            logo={company.logo}
            fill={company.fill}
          />
        ))}
      </div>
    </div>
  );
}
