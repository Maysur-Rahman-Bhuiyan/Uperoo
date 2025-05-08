'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github, Menu } from 'lucide-react'
import ModeToggle from './theme-btn'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
  ]

  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-40 border-b border-primary sticky top-0 backdrop-blur z-50">
      {/* Logo */}
      <div className="flex items-center text-xl font-bold text-[#035cd6]">
        <Link className="flex gap-0.5 items-center" href="/">
          <Image src="/logo.png" width={25} height={23} alt="Logo" />
          peroo
        </Link>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center justify-center gap-4 font-medium">
        {navItems.map((item) => (
          <li key={item.href} className="hover:scale-110 transition-transform">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex items-center gap-2">
        <Button
          className="hover:bg-background-200 hover:ring-1 hover:ring-foreground-300 transition-all duration-200"
          variant="outline"
        >
          <Link href="/contact">Hire Us</Link>
        </Button>
        <Button
          className="hover:bg-background-200 hover:ring-1 hover:ring-foreground-300 transition-all duration-200"
          variant="outline"
        >
          <Link target="_blank" href="https://github.com/Maysur-Rahman-Bhuiyan/Uperoo">
            <Github />
          </Link>
        </Button>
        <ModeToggle />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="text-xl font-bold mb-4">Menu</SheetHeader>
            <ul className="flex flex-col gap-4 text-lg">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Hire Us
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://github.com/Maysur-Rahman-Bhuiyan/Uperoo" onClick={() => setOpen(false)}>
                  GitHub
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar
