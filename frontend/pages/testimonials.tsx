
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Testimonial = { id:number, author:string, content:string }

export default function Testimonials(){
  const [items, setItems] = useState<Testimonial[]>([])
  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/testimonials').then(r=>r.json()).then(d=>setItems(d.data || []))
  },[])
  return (
    <>
      <Head>
        <title>Testimonials — Matriarch Tech</title>
      </Head>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Testimonials</h1>
            <div className="w-24 h-1 bg-accent-sage mx-auto mb-6"></div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Hear the calls of our satisfied herd. Discover how we've guided them to transform their digital presence with tailored, intelligent solutions.
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {items.map(i=> (
              <div key={i.id} className="card p-8 text-center">
                <div className="text-5xl mb-4">💬</div>
                <p className="italic text-2xl text-slate-700 leading-relaxed mb-6">"{i.content}"</p>
                <div className="text-lg font-bold text-accent-sage">— {i.author}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
