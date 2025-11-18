
import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const [form, setForm] = useState({ name:'', company:'', email:'', message:'' })
  const [status, setStatus] = useState(null)

  const submit = async (e:any) => {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
    const data = await res.json()
    if(data?.success){ setStatus('sent'); setForm({name:'',company:'',email:'',message:''}) } else { setStatus('error') }
  }

  return (
    <>
      <Head>
        <title>Contact Us — Matriarch Tech</title>
      </Head>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Let's Forge a Path Together</h1>
            <div className="w-24 h-1 bg-accent-sage mx-auto mb-6"></div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Your vision is the destination. Let us be the wise and strong guide that gets you there. Let's build something great together!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <form onSubmit={submit} className="card p-8 space-y-6">
              <h2 className="text-2xl font-bold text-center">Send Us a Message</h2>
              <div>
                <label className="block text-sm font-bold mb-2">Name *</label>
                <input 
                  value={form.name} 
                  onChange={e=>setForm({...form,name:e.target.value})} 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent-sage focus:outline-none transition-colors" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Company (Optional)</label>
                <input 
                  value={form.company} 
                  onChange={e=>setForm({...form,company:e.target.value})} 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent-sage focus:outline-none transition-colors" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email *</label>
                <input 
                  type="email" 
                  value={form.email} 
                  onChange={e=>setForm({...form,email:e.target.value})} 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent-sage focus:outline-none transition-colors" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Project Details *</label>
                <textarea 
                  value={form.message} 
                  onChange={e=>setForm({...form,message:e.target.value})} 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-accent-sage focus:outline-none transition-colors" 
                  rows={5} 
                  required 
                />
              </div>
              <div className="text-center">
                <button className="cta-primary w-full" type="submit">Send Message</button>
                {status === 'sending' && <p className="mt-3 text-slate-600">Sending…</p>}
                {status === 'sent' && <p className="mt-3 text-green-600 font-semibold">✓ Sent — we'll respond soon!</p>}
                {status === 'error' && <p className="mt-3 text-red-600 font-semibold">Error sending message.</p>}
              </div>
            </form>

            <div className="space-y-6">
              <div className="card p-8 text-center">
                <div className="text-5xl mb-4">📧</div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4 text-left">
                  <div>
                    <p className="font-bold text-sm text-primary-dark/70">General Inquiries:</p>
                    <a href="mailto:hello@matriarchtech.com" className="text-accent-blue hover:text-accent-sage transition-colors text-lg">hello@matriarchtech.com</a>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-primary-dark/70">Phone:</p>
                    <p className="text-lg">+27 XX XXX XXXX</p>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h3 className="font-bold text-xl mb-4 text-center">Our Team</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-accent-sage pl-4">
                    <p className="font-bold">Matale Peter Molepo (CEO)</p>
                    <a href="mailto:Peter01@matriarchtech.com" className="text-accent-blue hover:text-accent-sage transition-colors text-sm">Peter01@matriarchtech.com</a>
                  </div>
                  <div className="border-l-4 border-accent-sage pl-4">
                    <p className="font-bold">Kgosi Olifant (CTO)</p>
                    <a href="mailto:Kgosi02@matriarchtech.com" className="text-accent-blue hover:text-accent-sage transition-colors text-sm">Kgosi02@matriarchtech.com</a>
                  </div>
                  <div className="border-l-4 border-accent-sage pl-4">
                    <p className="font-bold">Neo Banda (Lead Front-End)</p>
                    <a href="mailto:Neo03@matriarchtech.com" className="text-accent-blue hover:text-accent-sage transition-colors text-sm">Neo03@matriarchtech.com</a>
                  </div>
                  <div className="border-l-4 border-accent-sage pl-4">
                    <p className="font-bold">Sbongkwanda Simelani (Lead Full-Stack)</p>
                    <a href="mailto:Kwanda04@matriarchtech.com" className="text-accent-blue hover:text-accent-sage transition-colors text-sm">Kwanda04@matriarchtech.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
