
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <>
      <Head>
        <title>About Us — Matriarch Tech</title>
      </Head>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Our Herd's Story</h1>
            <div className="w-24 h-1 bg-accent-sage mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-center mb-16">
            <p className="text-xl leading-relaxed text-slate-700">
              At Matriarch Tech, our name is our mission. The matriarch elephant is the cornerstone of her herd: remembered, resilient, and relentlessly intelligent. She leads with experience, protects her own, and navigates complex terrain with unwavering confidence.
            </p>
            <p className="text-xl leading-relaxed text-slate-700">
              We are a team of passionate computer science professionals who embody these principles. Our deep-rooted knowledge is our memory; it allows us to learn from the past and anticipate future trends. Our collaborative spirit is our strength, ensuring every project benefits from the collective wisdom of the herd.
            </p>
          </div>
          
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Why Choose the Matriarch?</h2>
            <div className="w-24 h-1 bg-accent-sage mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card text-center p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-bold text-xl mb-3">Strategic Vision</h3>
              <p className="text-slate-700">We look beyond the code to understand your long-term goals and market position.</p>
            </div>
            <div className="card text-center p-8">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="font-bold text-xl mb-3">Strength in Numbers</h3>
              <p className="text-slate-700">Your project is supported by our entire team's multidisciplinary expertise.</p>
            </div>
            <div className="card text-center p-8">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-xl mb-3">A Protective Instinct</h3>
              <p className="text-slate-700">Your digital security and business success are our non-negotiable priorities.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
