import Link from "next/link";
import Image from "next/image";
import { Brain, CodeXml, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-foreground bg-clip-text text-transparent">
            Building Digital Excellence
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Transform your business with cutting-edge software solutions powered by AI and modern technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-blue-500 hover:bg-blue-900/30 px-8 py-3 rounded-full transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-20 relative h-96 rounded-3xl overflow-hidden border border-blue-900/50">
          <Image
            src="/developer.jpg"
            alt="Software Development"
            fill
            className="object-cover opacity-80"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-background">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-500 mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 border-l border-r border-blue-900/50">
            <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-500 mb-2">99%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-primary/30 rounded-xl hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-white"><Brain/></div>
            <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
            <p className="text-gray-400">Building intelligent systems that learn and adapt to your needs.</p>
          </div>
          <div className="p-6 border border-primary/30 rounded-xl hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-white"><CodeXml/></div>
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-400">Scalable cloud infrastructure for your growing business.</p>
          </div>
          <div className="p-6 border border-primary/30 rounded-xl hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-white"><ShieldCheck/></div>
            <h3 className="text-xl font-bold mb-2">Cyber Security</h3>
            <p className="text-gray-400">Protecting your digital assets with enterprise-grade security.</p>
          </div>
        </div>
      </section>
    </main>
  );
}