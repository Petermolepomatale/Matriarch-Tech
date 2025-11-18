
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
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Our Herd's Story</h1>
        <p className="mt-4">At Matriarch Tech, our name is our mission. The matriarch elephant is the cornerstone of her herd: remembered, resilient, and relentlessly intelligent. She leads with experience, protects her own, and navigates complex terrain with unwavering confidence.</p>
        <p className="mt-4">We are a team of passionate computer science professionals who embody these principles. Our deep-rooted knowledge is our memory; it allows us to learn from the past and anticipate future trends. Our collaborative spirit is our strength, ensuring every project benefits from the collective wisdom of the herd.</p>
        
        <h2 className="mt-8 text-2xl font-semibold">Why Choose the Matriarch?</h2>
        <div className="mt-4 space-y-4">
          <div className="card">
            <h3 className="font-semibold">Strategic Vision</h3>
            <p className="mt-2">We look beyond the code to understand your long-term goals and market position.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Strength in Numbers</h3>
            <p className="mt-2">Your project is supported by our entire team's multidisciplinary expertise.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">A Protective Instinct</h3>
            <p className="mt-2">Your digital security and business success are our non-negotiable priorities.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
