import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-blue-900/50">
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
              <h4 className="text-lg font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-blue-500">Platform</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Solutions</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-blue-500">About</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Careers</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Blog</Link></li>
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