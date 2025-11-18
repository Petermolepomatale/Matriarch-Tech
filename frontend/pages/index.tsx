
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ThreeScene = dynamic(() => import('../components/ThreeScene'), { ssr: false })

export default function Home(){
  return (
    <>
      <Head>
        <title>Matriarch Tech — Guided by Wisdom, Built on Strength.</title>
      </Head>
      <Navbar />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-6xl font-extrabold leading-tight tracking-tight">
                Guided by Wisdom, <span className="text-gradient">Built on Strength</span>.
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                Transforming Your Ideas into Robust, Intelligent Digital Solutions with cutting-edge design, performance, and security.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <Link href="/contact" className="cta-primary inline-block">Start Your Project</Link>
                <Link href="/services" className="cta-secondary inline-block">Our Services</Link>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="feature-card text-center">
                  <div className="text-xs uppercase text-primary-dark/70 font-bold">Security</div>
                  <div className="mt-2 font-bold text-lg">Fortified by design</div>
                  <div className="mt-1 text-sm text-slate-600">SSL, audits, monitoring</div>
                </div>
                <div className="feature-card text-center">
                  <div className="text-xs uppercase text-primary-dark/70 font-bold">Performance</div>
                  <div className="mt-2 font-bold text-lg">Optimized & fast</div>
                  <div className="mt-1 text-sm text-slate-600">CDN, caching, efficient</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card-3d">
                <ThreeScene />
              </div>
              <div className="card flex items-center justify-between p-6">
                <div>
                  <div className="font-bold text-lg">Design + Motion</div>
                  <div className="text-sm text-slate-600">Future-facing UI with immersive interactions.</div>
                </div>
                <div>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" fill="#16A085"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-gradient-to-br from-primary-dark to-accent-blue py-20 my-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">See Our Vision in Action</h2>
            <p className="text-xl text-white/80 mb-10">Discover how we transform ideas into powerful digital solutions</p>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{paddingBottom: '56.25%'}}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/pQpFebyALV0?si=TRwuJgE_AWvwCWe0&amp;controls=0&amp;start=11" 
                  title="Matriarch Tech Vision" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-accent-sage mx-auto mb-6"></div>
          </div>
          <p className="card text-xl text-center max-w-4xl mx-auto leading-relaxed">
            Welcome to Matriarch Tech, where leadership in the digital world is earned through wisdom and strength. We are a team of dedicated computer science experts who embody the strategic mind of the matriarch. We don't just build websites; we guide businesses towards reliable, secure, and powerful digital ecosystems tailored for long-term success.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
