
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Project = { id:number, title:string, description:string, slug:string }

export default function Portfolio(){
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/projects').then(r => r.json()).then(d => setProjects(d.data || []))
  },[])

  return (
    <>
      <Head>
        <title>Portfolio — Matriarch Tech</title>
      </Head>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">See Our Herd's Journey</h1>
            <div className="w-24 h-1 bg-accent-sage mx-auto mb-6"></div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              A showcase of projects where we've guided businesses to greener pastures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map(p => (
              <div key={p.id} className="card p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-bold text-2xl text-accent-sage mb-4">{p.title}</h3>
                <p className="text-lg text-slate-700 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
