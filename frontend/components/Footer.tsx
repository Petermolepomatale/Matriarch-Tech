
import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-16 p-6 md:p-12 bg-gradient-to-br from-primary-dark via-[#34495e] to-accent-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-sage rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <img 
              src="/logo.png" 
              alt="Matriarch Tech" 
              className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-lg mx-auto md:mx-0 hover:scale-105 transition-transform"
            />
            <div className="font-bold text-xl md:text-2xl">Matriarch Tech</div>
            <div className="text-sm md:text-base mt-2 text-white/80">Guided by Wisdom, Built on Strength.</div>
            <div className="mt-4 space-y-1 text-sm md:text-base">
              <p>📧 hello@matriarchtech.com</p>
              <p>📞 +27 XX XXX XXXX</p>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg md:text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href="/about" className="hover:text-accent-sage transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent-sage transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent-sage transition-colors">Portfolio</Link></li>
              <li><Link href="/team" className="hover:text-accent-sage transition-colors">Our Team</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent-sage transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-accent-sage transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg md:text-xl mb-4">Newsletter</h4>
            <p className="text-sm md:text-base text-white/80 mb-4">Subscribe for industry insights and web development wisdom.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 p-3 rounded sm:rounded-l text-primary-dark text-sm focus:outline-none" 
              />
              <button className="bg-accent-sage px-4 py-3 rounded sm:rounded-r hover:bg-opacity-90 transition-all text-sm font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center text-xs md:text-sm text-white/60 pt-8 border-t border-white/20">
          © {new Date().getFullYear()} Matriarch Tech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
