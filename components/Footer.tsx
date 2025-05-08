import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-blue-900/50 bottom-0">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <span className="text-xl font-bold">Uperoo</span>
              </div>
              <p className="text-gray-400">Innovating the future of software solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
                <li><Link href="/services" className="hover:text-blue-500">Services</Link></li>
                <li><Link href="/pricing" className="hover:text-blue-500">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Expertise</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-blue-500">Web Development</Link></li>
                <li><Link href="#" className="hover:text-blue-500">MERN Development</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Database Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@nextech.com</li>
                <li>+1 (555) 000-1234</li>
                <li>New York, USA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-900/50 mt-12 pt-8 text-center text-gray-400">
            © 2024 Uperoo. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer