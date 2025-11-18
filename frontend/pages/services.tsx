
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
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <div className="w-24 h-1 bg-accent-sage mx-auto mb-6"></div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              We provide a full spectrum of web development services, led by our strategic approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="card text-center p-8">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="font-bold text-xl mb-3">Web Development</h3>
              <p className="text-slate-700">Custom website solutions for small businesses, startups, and enterprises.</p>
            </div>
            <div className="card text-center p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-3">Full-Stack Development</h3>
              <p className="text-slate-700">Comprehensive front-end and back-end development for seamless experiences.</p>
            </div>
            <div className="card text-center p-8">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="font-bold text-xl mb-3">E-commerce Solutions</h3>
              <p className="text-slate-700">Secure, efficient, and scalable online stores that grow with your herd.</p>
            </div>
            <div className="card text-center p-8">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="font-bold text-xl mb-3">Content Management Systems</h3>
              <p className="text-slate-700">Easy-to-manage websites through WordPress, Joomla, and other platforms.</p>
            </div>
            <div className="card text-center p-8">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="font-bold text-xl mb-3">Web Application Development</h3>
              <p className="text-slate-700">Complex, custom web applications built with robust architecture.</p>
            </div>
            <div className="card text-center p-8">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-bold text-xl mb-3">Security & Fortification</h3>
              <p className="text-slate-700">Proactive security solutions to protect your digital territory.</p>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Our Guided Packages</h2>
            <div className="w-24 h-1 bg-accent-sage mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Each package begins with a personal consultation to understand the unique needs of your herd.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🐘</div>
              <h4 className="font-bold text-2xl text-accent-sage mb-3">The Calf (Basic)</h4>
              <p className="font-medium mb-4">For startups finding their footing.</p>
              <ul className="text-left space-y-2">
                <li>✓ Up to 5 pages</li>
                <li>✓ Basic security</li>
                <li>✓ Responsive design</li>
              </ul>
            </div>
            <div className="card p-8 text-center border-2 border-accent-sage">
              <div className="text-5xl mb-4">🦣</div>
              <h4 className="font-bold text-2xl text-accent-sage mb-3">The Adolescent (Plus)</h4>
              <p className="font-medium mb-4">For growing businesses expanding their range.</p>
              <ul className="text-left space-y-2">
                <li>✓ Up to 10 pages</li>
                <li>✓ Advanced security</li>
                <li>✓ SEO optimization</li>
                <li>✓ CMS integration</li>
              </ul>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🐘</div>
              <h4 className="font-bold text-2xl text-accent-sage mb-3">The Matriarch (Premium)</h4>
              <p className="font-medium mb-4">For established enterprises leading the market.</p>
              <ul className="text-left space-y-2">
                <li>✓ Custom development</li>
                <li>✓ Comprehensive security audit</li>
                <li>✓ Ongoing support & strategy</li>
              </ul>
            </div>
          </div>

          <section className="card p-10 text-center max-w-4xl mx-auto bg-gradient-to-br from-accent-sage/10 to-accent-blue/10">
            <h2 className="text-3xl font-bold mb-4">Training & Support</h2>
            <p className="text-xl italic text-slate-700 mb-4">"A matriarch empowers her herd to thrive independently."</p>
            <p className="text-lg text-slate-700 mb-4">
              At Matriarch Tech, we believe in empowering our clients. We offer tailored training programs for your team, ensuring they are fully equipped to manage and maintain their new digital territory.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Ongoing Herd Support:</strong> We guarantee our clients access to technical assistance and training. From testing support to software updates, we are here to ensure your journey continues smoothly.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
