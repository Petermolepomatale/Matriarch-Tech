
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
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <p className="mt-3 text-lg">Hear the calls of our satisfied herd. Discover how we've guided them to transform their digital presence with tailored, intelligent solutions.</p>
        <div className="mt-6 space-y-4">
          {items.map(i=> (
            <div key={i.id} className="card">
              <p className="italic text-lg">"{i.content}"</p>
              <div className="mt-3 text-sm font-semibold text-accent-sage">— {i.author}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
