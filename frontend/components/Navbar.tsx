
import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="header-footer p-4 backdrop-blur-md bg-[rgba(44,62,80,0.85)] fixed w-full z-20 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Matriarch Tech" className="w-12 h-12 rounded-md" />
          <div className="text-white font-bold tracking-wide text-lg">Matriarch Tech</div>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="text-white hover:text-accent-sage transition-colors duration-200">Home</Link>
          <Link href="/about" className="text-white hover:text-accent-sage transition-colors duration-200">About Us</Link>
          <Link href="/services" className="text-white hover:text-accent-sage transition-colors duration-200">Services</Link>
          <Link href="/portfolio" className="text-white hover:text-accent-sage transition-colors duration-200">Portfolio</Link>
          <Link href="/testimonials" className="text-white hover:text-accent-sage transition-colors duration-200">Testimonials</Link>
          <Link href="/team" className="text-white hover:text-accent-sage transition-colors duration-200">Our Team</Link>
          <Link href="/contact" className="text-white hover:text-accent-sage transition-colors duration-200">Contact Us</Link>
        </nav>
        <div className="md:hidden text-white text-2xl">☰</div>
      </div>
    </header>
  )
}
