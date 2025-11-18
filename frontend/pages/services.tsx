
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services(){
  return (
    <>
      <Head>
        <title>Services — Matriarch Tech</title>
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-3 text-lg">We provide a full spectrum of web development services, led by our strategic approach.</p>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold text-lg">Web Development</h3>
            <p className="mt-2">Custom website solutions for small businesses, startups, and enterprises.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">Full-Stack Development</h3>
            <p className="mt-2">Comprehensive front-end and back-end development for seamless user experiences and powerful server-side logic.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">E-commerce Solutions</h3>
            <p className="mt-2">Secure, efficient, and scalable online stores that grow with your herd.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">Content Management Systems (CMS)</h3>
            <p className="mt-2">Easy-to-manage websites through WordPress, Joomla, and other platforms, putting you in control.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">Web Application Development</h3>
            <p className="mt-2">Complex, custom web applications built with robust architecture and intuitive interfaces.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg">Security & Fortification</h3>
            <p className="mt-2">Proactive security solutions to protect your digital territory from threats.</p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">Our Guided Packages</h2>
        <p className="mt-2">Each package begins with a personal consultation to understand the unique needs of your herd.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="font-semibold text-lg text-accent-sage">The Calf (Basic)</h4>
            <p className="mt-2 text-sm font-medium">For startups finding their footing.</p>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
              <li>Up to 5 pages</li>
              <li>Basic security</li>
              <li>Responsive design</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="font-semibold text-lg text-accent-sage">The Adolescent (Plus)</h4>
            <p className="mt-2 text-sm font-medium">For growing businesses expanding their range.</p>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
              <li>Up to 10 pages</li>
              <li>Advanced security</li>
              <li>SEO optimization</li>
              <li>CMS integration</li>
            </ul>
          </div>
          <div className="card">
            <h4 className="font-semibold text-lg text-accent-sage">The Matriarch (Premium)</h4>
            <p className="mt-2 text-sm font-medium">For established enterprises leading the market.</p>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
              <li>Custom development</li>
              <li>Comprehensive security audit</li>
              <li>Ongoing support & strategy</li>
            </ul>
          </div>
        </div>

        <section className="mt-12 card bg-primary-light">
          <h2 className="text-2xl font-semibold">Training & Support</h2>
          <p className="mt-3 italic">"A matriarch empowers her herd to thrive independently."</p>
          <p className="mt-3">At Matriarch Tech, we believe in empowering our clients. We offer tailored training programs for your team, ensuring they are fully equipped to manage and maintain their new digital territory.</p>
          <p className="mt-3"><strong>Ongoing Herd Support:</strong> We guarantee our clients access to technical assistance and training. From testing support to software updates, we are here to ensure your journey continues smoothly.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
