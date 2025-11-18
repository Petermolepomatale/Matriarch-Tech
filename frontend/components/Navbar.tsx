
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Navbar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const isActive = (path: string) => router.pathname === path
  
  return (
    <header className={`header-footer py-3 md:py-4 px-4 md:px-6 backdrop-blur-xl fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[rgba(44,62,80,0.98)] shadow-2xl border-b border-accent-sage/20' 
        : 'bg-[rgba(44,62,80,0.85)] shadow-xl'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Enhanced Logo with Glow Effect */}
        <Link href="/" className="flex items-center space-x-2 md:space-x-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-sage/30 rounded-xl blur-xl group-hover:bg-accent-sage/50 transition-all duration-300"></div>
            <img 
              src="/logo.png" 
              alt="Matriarch Tech" 
              className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 rounded-xl shadow-2xl group-hover:scale-110 transition-transform duration-300 border-2 border-accent-sage/30 group-hover:border-accent-sage/60" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold tracking-tight text-lg sm:text-xl md:text-2xl lg:text-3xl group-hover:text-accent-sage transition-colors duration-300">
              Matriarch Tech
            </span>
            <span className="text-accent-sage/80 text-xs md:text-sm font-medium tracking-wider hidden sm:block">
              Guided by Wisdom
            </span>
          </div>
        </Link>
        
        {/* Enhanced Desktop Navigation */}
        <nav className="space-x-4 lg:space-x-6 xl:space-x-8 hidden lg:flex items-center">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/services', label: 'Services' },
            { href: '/portfolio', label: 'Portfolio' },
            { href: '/testimonials', label: 'Testimonials' },
            { href: '/team', label: 'Our Team' }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`relative text-white hover:text-accent-sage transition-all duration-300 font-semibold text-sm xl:text-base group ${
                isActive(link.href) ? 'text-accent-sage' : ''
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-sage transition-all duration-300 ${
                isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="cta-primary text-sm xl:text-base py-2.5 px-6 ml-4 relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </nav>
        
        {/* Enhanced Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white text-3xl cursor-pointer hover:text-accent-sage transition-all duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 bg-accent-sage/20 rounded-lg blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
          <span className="relative">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
      
      {/* Enhanced Mobile Navigation with Slide Animation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="mt-4 pb-4 space-y-2 border-t border-accent-sage/30 pt-4">
          {[
            { href: '/', label: 'Home', icon: '🏠' },
            { href: '/about', label: 'About Us', icon: '📖' },
            { href: '/services', label: 'Services', icon: '⚙️' },
            { href: '/portfolio', label: 'Portfolio', icon: '💼' },
            { href: '/testimonials', label: 'Testimonials', icon: '💬' },
            { href: '/team', label: 'Our Team', icon: '👥' }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`flex items-center space-x-3 text-white hover:text-accent-sage hover:bg-white/5 transition-all duration-200 py-3 px-4 rounded-lg text-lg font-semibold ${
                isActive(link.href) ? 'bg-accent-sage/20 text-accent-sage' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="block cta-primary text-center py-4 px-4 mx-4 text-lg font-bold mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            📧 Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
