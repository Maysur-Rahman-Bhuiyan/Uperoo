import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github } from 'lucide-react'
import ModeToggle from './theme-btn'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-40 border-b border-primary sticky top-0 backdrop-blur z-50'>
        <div className="flex items-center text-xl font-bold text-[#035cd6]">
            <Link className='flex gap-0.5' href={'/'}><Image src={'/logo.png'} width={25} height={23} alt=''/>peroo</Link>
        </div>
        <ul className='flex items-center justify-center gap-4 font-medium'>
            <li className='hover:scale-110 transition-transform'><Link href="/">Home</Link></li>
            <li className='hover:scale-110 transition-transform'><Link href="/about">About</Link></li>
            <li className='hover:scale-110 transition-transform'><Link href="/services">Services</Link></li>
            <li className='hover:scale-110 transition-transform'><Link href="/pricing">Pricing</Link></li>
        </ul>
        <div className='flex items-center gap-2'> 
            <Button className='hover:bg-background-200 hover:ring-1 hover:ring-foreground-300 transition-all duration-200' variant="outline"><Link href={'/contact'}>Hire Us</Link></Button>
            <Button className='hover:bg-background-200 hover:ring-1 hover:ring-foreground-300 transition-all duration-200' variant="outline"><Link target='_blank' href={'https://tailwindcss.com'}><Github/></Link></Button>
            <ModeToggle/>
        </div>
    </nav>
  )
}

export default Navbar