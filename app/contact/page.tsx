import { Github, Instagram, LampDesk, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main>
      {/* Contact Hero */}
      <section className="pt-40 pb-20 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-foreground bg-clip-text text-transparent">
            Let's Build Tomorrow
          </h1>
          <p className="text-xl text-gray-500">
            Get in touch to start your digital transformation journey
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="p-8 dark:bg-gray-900 rounded-2xl border dark:border-blue-900/30 border-gray-400">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full dark:bg-gray-800 rounded-lg px-4 py-3 focus:ring-2 border border-gray-400 dark:border-blue-900/30 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full dark:bg-gray-800 rounded-lg px-4 py-3 focus:ring-2 border border-gray-400 dark:border-blue-900/30 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full dark:bg-gray-800 rounded-lg px-4 py-3 focus:ring-2 border border-gray-400 dark:border-blue-900/30 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg transition-all transform hover:scale-[1.02] text-white">
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: <Twitter/>, label: 'Twitter', url: '#' },
                { icon: <Linkedin/>, label: 'LinkedIn', url: '#' },
                { icon: <Instagram/>, label: 'Instagram', url: '#' }
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.url}
                  className="p-4 dark:bg-gray-900 rounded-xl dark:hover:bg-blue-900/20 hover:bg-gray-200 transition-all border border-blue-900/30 hover:border-blue-500/50"
                >
                  <span className="text-2xl">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 dark:bg-gray-900 rounded-2xl border border-gray-400 dark:border-blue-900/30">
              <h2 className="text-2xl font-bold mb-8">Global Headquarters</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <LampDesk className="p-1"/>
                  </div>
                  <div>
                    <p className="font-medium">Silicon Valley Office</p>
                    <p className="text-gray-400">123 Tech Valley Drive</p>
                    <p className="text-gray-400">San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="p-1"/>
                  </div>
                  <div>
                    <p className="font-medium">Contact Numbers</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">+1 (555) 890-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="p-1"/>
                  </div>
                  <div>
                    <p className="font-medium">Email Addresses</p>
                    <p className="text-gray-400">hello@nextech.com</p>
                    <p className="text-gray-400">support@nextech.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-blue-900/30">
              <Image
                src="/developer.jpg"
                alt="Office Location"
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}