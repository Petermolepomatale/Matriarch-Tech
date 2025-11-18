
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="header-footer py-3 md:py-4 px-4 md:px-6 backdrop-blur-md bg-[rgba(44,62,80,0.95)] fixed w-full z-50 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Responsive sizes */}
        <Link href="/" className="flex items-center space-x-2 md:space-x-4 hover:opacity-90 transition-opacity">
          <img 
            src="/logo.png" 
            alt="Matriarch Tech" 
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg shadow-lg hover:scale-105 transition-transform" 
          />
          <div className="text-white font-bold tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl">
            Matriarch Tech
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="space-x-6 lg:space-x-8 hidden lg:flex items-center">
          <Link href="/" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium text-base">Home</Link>
          <Link href="/about" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium text-base">About Us</Link>
          <Link href="/services" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium text-base">Services</Link>
          <Link href="/portfolio" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium text-base">Portfolio</Link>
          <Link href="/testimonials" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium text-base">Testimonials</Link>
          <Link href="/team" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium text-base">Our Team</Link>
          <Link href="/contact" className="cta-primary text-sm py-2 px-4">Contact Us</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white text-3xl cursor-pointer hover:text-accent-sage transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4">
          <Link href="/" className="block text-white hover:text-accent-sage transition-colors py-2 px-4 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block text-white hover:text-accent-sage transition-colors py-2 px-4 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/services" className="block text-white hover:text-accent-sage transition-colors py-2 px-4 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/portfolio" className="block text-white hover:text-accent-sage transition-colors py-2 px-4 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          <Link href="/testimonials" className="block text-white hover:text-accent-sage transition-colors py-2 px-4 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
          <Link href="/team" className="block text-white hover:text-accent-sage transition-colors py-2 px-4 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
          <Link href="/contact" className="block cta-primary text-center py-3 px-4 mx-4 text-base" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </nav>
      )}
    </header>
  )
}
