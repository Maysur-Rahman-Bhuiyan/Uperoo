import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <main className="min-h-screen">
      {/* Pricing Hero */}
      <section className="pt-40 pb-20 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-foreground bg-clip-text text-transparent">
            Flexible Plans for Every Need
          </h1>
          <p className="text-xl text-gray-400">
            Scale with solutions that grow alongside your business
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
          {[
            {
              name: "Starter",
              price: "29",
              desc: "Perfect for individual developers",
              features: ["Basic Analytics", "5 Projects", "Community Support", "100GB Storage"],
              highlight: false
            },
            {
              name: "Professional",
              price: "99",
              desc: "For growing teams & businesses",
              features: ["Advanced Analytics", "Unlimited Projects", "Priority Support", "Team Management", "1TB Storage"],
              highlight: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              desc: "Tailored solutions for organizations",
              features: ["Custom Analytics", "Dedicated Support", "SLA Agreements", "Security Audit", "Scalable Storage"],
              highlight: false
            }
          ].map((tier, index) => (
            <div key={index} className={`p-8 rounded-2xl transition-all ${tier.highlight ? "bg-primary/30 border-2 border-blue-500 scale-105 cursor-pointer" : "border-2 border-primary"} hover:transform hover:scale-[1.03] cursor-pointer`}>
              {tier.highlight && (
                <div className="text-xs font-bold text-blue-500 mb-4">MOST POPULAR</div>
              )}
              <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold mb-4">
                {tier.price === "Custom" ? tier.price : `$${tier.price}`}<span className="text-xl text-gray-600">/mo</span>
              </div>
              <p className="text-gray-500 mb-8">{tier.desc}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <div className="w-5 h-5 rounded-full mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg transition-all ${tier.highlight ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}>
                <Link href={'/contact'}>Get Started</Link>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Plan Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-900/50">
                <th className="text-left pb-4">Features</th>
                <th className="text-center pb-4">Starter</th>
                <th className="text-center pb-4">Professional</th>
                <th className="text-center pb-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["API Access", "✓", "✓", "✓"],
                ["Analytics Dashboard", "Basic", "Advanced", "Custom"],
                ["Support", "Email", "24/7 Priority", "Dedicated"],
                ["SLA Agreement", "✗", "✓", "✓"],
                ["Custom Domain", "✗", "✓", "✓"],
                ["Team Members", "1", "10", "Unlimited"]
              ].map((row, index) => (
                <tr key={index} className="border-b border-blue-900/20 hover:bg-blue-900/15 transition-colors cursor-pointer">
                  <td className="py-4">{row[0]}</td>
                  {row.slice(1).map((cell, cellIndex) => (
                    <td key={cellIndex} className="text-center py-4">
                      {cell === "✓" ? (
                        <div className="text-blue-500">✓</div>
                      ) : cell === "✗" ? (
                        <div className="text-gray-500">✗</div>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-16 text-center">Common Questions</h2>
          <div className="grid gap-8">
            {[
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade or downgrade at any time."
              },
              {
                question: "Is there a free trial?",
                answer: "We offer 14-day free trial for Professional plan."
              },
              {
                question: "What payment methods do you accept?",
                answer: "All major credit cards and PayPal."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 border-primary/50 cursor-pointer border-2 rounded-xl hover:border-primary transition-colors">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}