
import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="header-footer py-4 px-6 backdrop-blur-md bg-[rgba(44,62,80,0.9)] fixed w-full z-20 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4 hover:opacity-90 transition-opacity">
          <img src="/logo.png" alt="Matriarch Tech" className="w-16 h-16 rounded-lg shadow-lg" />
          <div className="text-white font-bold tracking-wide text-xl">Matriarch Tech</div>
        </Link>
        <nav className="space-x-8 hidden lg:flex items-center">
          <Link href="/" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium">Home</Link>
          <Link href="/about" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium">About Us</Link>
          <Link href="/services" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium">Services</Link>
          <Link href="/portfolio" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium">Portfolio</Link>
          <Link href="/testimonials" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium">Testimonials</Link>
          <Link href="/team" className="text-white hover:text-accent-sage transition-colors duration-200 font-medium">Our Team</Link>
          <Link href="/contact" className="cta-primary text-sm py-2 px-4">Contact Us</Link>
        </nav>
        <div className="lg:hidden text-white text-2xl cursor-pointer">☰</div>
      </div>
    </header>
  )
}
