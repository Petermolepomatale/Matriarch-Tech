
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
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold">See Our Herd's Journey</h1>
        <p className="mt-3 text-lg">A showcase of projects where we've guided businesses to greener pastures.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.id} className="card">
              <h3 className="font-semibold text-xl text-accent-sage">{p.title}</h3>
              <p className="mt-3">{p.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
