import { Handshake, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Mission Statement Section */}
      <section className="pt-40 pb-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-foreground bg-clip-text text-transparent">
              Shaping Tomorrow's Technology
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              At NexTech, we're more than developers - we're digital architects building foundations 
              for the future. Since 2010, our team has been dedicated to creating transformative 
              solutions that empower businesses worldwide.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all text-white">
                Meet Our Team
              </button>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden border border-blue-900/50">
            <Image
              src="/developer.jpg"
              alt="Collaborative Team"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* Timeline Section */}
<section className="py-20">
  <div className="container mx-auto px-6 max-w-4xl">
    <h3 className="text-3xl font-bold mb-16 text-center">Our Journey</h3>

    <div className="relative">
      {/* Vertical line for md and up */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {[
          { year: "2010", title: "Founded in Silicon Valley", content: "Started with 5 passionate developers in a shared workspace" },
          { year: "2014", title: "First Major Client", content: "Delivered enterprise solution for Fortune 500 company" },
          { year: "2018", title: "Global Expansion", content: "Opened offices in 3 continents with 100+ employees" },
          { year: "2023", title: "AI Revolution", content: "Launched industry-leading AI development platform" },
        ].map((item, index) => (
          <div
            key={item.year}
            className={`relative md:flex md:items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Spacer for alignment */}
            {index % 2 !== 0 && (
              <div className="hidden md:block md:w-1/2" />
            )}

            {/* Timeline card */}
            <div
              className={`
                relative w-full md:w-1/2 bg-background border-2 border-primary rounded-xl p-6 shadow-md
                ${index % 2 === 0 ? "md:ml-6" : "md:mr-6"}
              `}
            >
              {/* Dot */}
              <div
                className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 z-10 
                  ${index % 2 === 0 ? '-left-8' : '-right-8'}`}
              ></div>


              {/* Mobile dot + year */}
              <div className="md:hidden flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="font-bold text-blue-400">{item.year}</span>
              </div>

              {/* Desktop year */}
              <div className="hidden md:block text-blue-400 font-bold mb-2">
                {item.year}
              </div>

              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.content}</p>
            </div>

            {index % 2 === 0 && (
              <div className="hidden md:block md:w-1/2" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-16 text-center">Our Philosophy</h3>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="text-blue-500 text-4xl mb-4"><Rocket/></div>
              <h4 className="text-xl font-bold mb-3">Innovation Driven</h4>
              <p className="text-gray-400">
                We constantly push boundaries, embracing emerging technologies to stay ahead of 
                industry curves while maintaining practical implementations.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="text-blue-500 text-4xl mb-4"><Handshake/></div>
              <h4 className="text-xl font-bold mb-3">Client Partnership</h4>
              <p className="text-gray-400">
                Your success is our metric. We work transparently, ensuring alignment at every 
                stage while maintaining agility for evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-16 text-center">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {['CEO', 'CTO', 'COO'].map((role) => (
              <div key={role} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-900/50 hover:border-blue-500 transition-all">
                  <Image
                    src={`/developer.jpg?img=${Math.floor(Math.random() * 50)}`}
                    alt={role}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 cursor-pointer"
                  />
                </div>
                <h4 className="text-xl font-bold">Alex Johnson</h4>
                <p className="text-blue-400 mb-2">{role}</p>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                  {`15+ years experience in ${role === 'CEO' ? 'business strategy' : role === 'CTO' ? 'technology leadership' : 'operations management'}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border-b md:border-b-0 md:border-r border-blue-900/50">
            <div className="text-4xl font-bold text-blue-500 mb-2">1M+</div>
            <p className="text-gray-400">Users Impacted</p>
          </div>
          <div className="p-6 border-b md:border-b-0 md:border-r border-blue-900/50">
            <div className="text-4xl font-bold text-blue-500 mb-2">150+</div>
            <p className="text-gray-400">Patents Filed</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
            <p className="text-gray-400">Client Retention</p>
          </div>
        </div>
      </section>
    </main>
  );
}