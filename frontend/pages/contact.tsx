
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
      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Let's Forge a Path Together.</h1>
        <p className="mt-3 text-lg">Your vision is the destination. Let us be the wise and strong guide that gets you there. Let's build something great together!</p>
        
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={submit} className="space-y-4 card">
            <h2 className="text-xl font-semibold">Send Us a Message</h2>
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-1 w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Company (Optional)</label>
              <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} className="mt-1 w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Project Details</label>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="mt-1 w-full p-2 border rounded" rows={5} required />
            </div>
            <div>
              <button className="cta-primary" type="submit">Send Message</button>
              {status === 'sending' && <span className="ml-3">Sending…</span>}
              {status === 'sent' && <span className="ml-3 text-green-600">✓ Sent — we'll respond soon.</span>}
              {status === 'error' && <span className="ml-3 text-red-600">Error sending message.</span>}
            </div>
          </form>

          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="font-medium">General Inquiries:</p>
                  <a href="mailto:hello@matriarchtech.com" className="text-accent-blue hover:underline">hello@matriarchtech.com</a>
                </div>
                <div>
                  <p className="font-medium">Phone:</p>
                  <p>+27 XX XXX XXXX</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-semibold">Our Team</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>Matale Peter Molepo (CEO):</strong><br/>
                <a href="mailto:Peter01@matriarchtech.com" className="text-accent-blue hover:underline">Peter01@matriarchtech.com</a></p>
                <p><strong>Kgosi Olifant (CTO):</strong><br/>
                <a href="mailto:Kgosi02@matriarchtech.com" className="text-accent-blue hover:underline">Kgosi02@matriarchtech.com</a></p>
                <p><strong>Neo Banda (Lead Front-End):</strong><br/>
                <a href="mailto:Neo03@matriarchtech.com" className="text-accent-blue hover:underline">Neo03@matriarchtech.com</a></p>
                <p><strong>Sbongkwanda Simelani (Lead Full-Stack):</strong><br/>
                <a href="mailto:Kwanda04@matriarchtech.com" className="text-accent-blue hover:underline">Kwanda04@matriarchtech.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
