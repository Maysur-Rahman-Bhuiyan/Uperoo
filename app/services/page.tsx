import { Brain, Cloud, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { SiTensorflow, SiAmazon, SiPython, SiReact, SiNodedotjs } from "react-icons/si";

export default function Services() {
  return (
    <main>
      {/* Services Hero */}
      <section className="pt-40 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-foreground bg-clip-text text-transparent">
            Empower Your Digital Future
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Specialized solutions transforming ideas into market-leading realities
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "AI Solutions", 
              desc: "Intelligent systems driving business growth",
              features: ["Machine Learning", "Predictive Analytics", "NLP Processing"],
              emoji: <Brain/>,
            },
            { 
              title: "Cloud Systems", 
              desc: "Scalable infrastructure solutions",
              features: ["AWS/Azure/GCP", "Serverless Architecture", "DevOps Automation"],
              emoji: <Cloud/>
            },
            { 
              title: "Cyber Security", 
              desc: "Enterprise-grade protection",
              features: ["Threat Detection", "Data Encryption", "Compliance Management"],
              emoji: <ShieldCheck/>,
            }
          ].map((service, index) => (
            <div key={index} className="p-8 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all group cursor-pointer">
              <div className="text-6xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity text-blue-700">
                {service.emoji}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-blue-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Development Process</h2>
          <div className="grid grid-cols-4 gap-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-900/50 transform -translate-y-1/2"></div>
            {['Discovery', 'Design', 'Develop', 'Deploy'].map((step, index) => (
              <div key={step} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white">
                  0{index + 1}
                </div>
                <h3 className="font-bold mb-2">{step}</h3>
                <p className="text-sm text-gray-400">Phase</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Tech Ecosystem</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { name: 'React', icon: <SiReact className="w-12 h-12 mx-auto text-[#61DAFB]" /> },
              { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12 mx-auto text-[#339933]" /> },
              { name: 'Python', icon: <SiPython className="w-12 h-12 mx-auto text-[#3776AB]" /> },
              { name: 'TensorFlow', icon: <SiTensorflow className="w-12 h-12 mx-auto text-[#FF6F00]" /> },
              { name: 'AWS', icon: <SiAmazon className="w-12 h-12 mx-auto text-[#FF9900]" /> }
            ].map((tech) => (
              <div key={tech.name} className="p-4 border-primary border rounded-lg hover:bg-blue-900/20 transition-all">
                {tech.icon}
                <div className="font-bold text-blue-400 mt-3">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-foreground bg-clip-text text-transparent">
              Custom Enterprise Solutions
            </h2>
            <p className="text-gray-400">
              Tailored systems designed for complex business needs with:
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {['24/7 Support', 'SLA Guarantees', 'White-label Options', 'Compliance'].map((item) => (
                <li key={item} className="flex items-center text-blue-500">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-blue-900/50">
            <Image
              src="/developer.jpg"
              alt="Enterprise Solutions"
              fill
              className="object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Start Your Digital Transformation</h2>
            <p className="text-gray-400 mb-12">
              Schedule a free consultation with our technical experts
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 text-white">
              Book Discovery Call
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}