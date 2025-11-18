
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
      <main className="pt-24 max-w-6xl mx-auto p-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
              Guided by Wisdom, <span className="text-accent-sage">Built on Strength</span>.
            </h1>
            <p className="text-lg text-slate-700">
              Transforming Your Ideas into Robust, Intelligent Digital Solutions with cutting-edge design, performance, and security.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="cta-primary inline-block">Start Your Project</Link>
              <Link href="/services" className="cta-secondary inline-block">Our Services</Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="feature-card">
                <div className="text-sm uppercase text-primary-dark/70 font-semibold">Security</div>
                <div className="mt-2 font-bold">Fortified by design</div>
                <div className="mt-1 text-sm text-slate-600">SSL, audits, monitoring</div>
              </div>
              <div className="feature-card">
                <div className="text-sm uppercase text-primary-dark/70 font-semibold">Performance</div>
                <div className="mt-2 font-bold">Optimized & fast</div>
                <div className="mt-1 text-sm text-slate-600">CDN, caching, efficient code</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-3d">
              <ThreeScene />
            </div>
            <div className="card flex items-center justify-between p-6">
              <div>
                <div className="font-semibold text-lg">Design + Motion</div>
                <div className="text-sm text-slate-600">Future-facing UI with immersive interactions.</div>
              </div>
              <div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" fill="#16A085"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="card text-lg">
            Welcome to Matriarch Tech, where leadership in the digital world is earned through wisdom and strength. We are a team of dedicated computer science experts who embody the strategic mind of the matriarch. We don't just build websites; we guide businesses towards reliable, secure, and powerful digital ecosystems tailored for long-term success.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
