import {
  FiShield,
  FiZap,
  FiRefreshCw,
  FiHeart,
} from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "256-bit Security",
    description:
      "Bank-grade SSL encryption and PCI-DSS compliant payment processing protects every transaction.",
    icon: <FiShield size={34} />,
    color: "bg-cyan-500",
  },
  {
    id: 2,
    title: "Instant E-Tickets",
    description:
      "Real-time seat locking and immediate e-ticket delivery to your inbox and SMS.",
    icon: <FiZap size={34} />,
    color: "bg-emerald-500",
  },
  {
    id: 3,
    title: "Easy Refunds",
    description:
      "Hassle-free cancellations with automated refunds processed within 24 hours.",
    icon: <FiRefreshCw size={34} />,
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Dedicated travel support via live chat, phone, and email — always here for you.",
    icon: <FiHeart size={34} />,
    color: "bg-purple-500",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="bg-[#08111F] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">


        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-2">

            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our Promise
            </span>

          </div>

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Why Choose TicketBari?
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Built for travelers who value speed, trust, and comfort on every
            journey.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-3xl border border-white/10 bg-[#111827] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30"
            >
              <div
                className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${feature.color}`}
              >
                {feature.icon}
              </div>


              <h3 className="text-3xl font-bold text-white">
                {feature.title}
              </h3>



              <p className="mt-6 text-lg leading-9 text-gray-400">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;