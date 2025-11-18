import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Team(){
  const team = [
    {
      name: 'Matale Peter Molepo',
      role: 'Chief Executive Officer (CEO)',
      focus: 'Strategic Direction & Client Relations',
      profile: 'Provides the overarching vision for the company, ensuring all projects align with our core values of strength and wisdom. He is the primary architect of client partnerships and long-term strategy.',
      email: 'Peter01@matriarchtech.com'
    },
    {
      name: 'Kgosi Olifant',
      role: 'Chief Technology Officer (CTO)',
      focus: 'Technical Architecture & Security',
      profile: 'Oversees all technical development, from system architecture to security protocols. His deep expertise ensures that every solution is built on a robust, scalable, and secure foundation.',
      email: 'Kgosi02@matriarchtech.com'
    },
    {
      name: 'Sbongkwanda Simelani',
      role: 'Lead Full-Stack Developer',
      focus: 'Back-end Logic & Complex Systems',
      profile: 'Specializes in building the powerful, server-side logic that drives complex web applications and e-commerce platforms. He ensures functionality, performance, and database integrity.',
      email: 'Kwanda04@matriarchtech.com'
    },
    {
      name: 'Neo Banda',
      role: 'Lead Front-End Developer & UX Designer',
      focus: 'User Experience & Interface Design',
      profile: 'Crafts the visual identity and user journey of every project. Combining an eye for design with clean code, Neo ensures our solutions are not only powerful but also intuitive and engaging for the end-user.',
      email: 'Neo03@matriarchtech.com'
    }
  ]

  return (
    <>
      <Head>
        <title>Our Team — Matriarch Tech</title>
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Meet the Minds Behind the Herd</h1>
        <p className="mt-3 text-lg">The strength of Matriarch Tech lies in the diverse expertise and shared vision of our founding team.</p>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="card">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-accent-sage font-semibold mt-1">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Focus:</strong> {member.focus}</p>
              <p className="mt-3">{member.profile}</p>
              <p className="mt-3 text-sm"><strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-accent-blue hover:underline">{member.email}</a></p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
