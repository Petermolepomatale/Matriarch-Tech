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
      email: 'Peter01@matriarchtech.com',
      icon: '👔'
    },
    {
      name: 'Kgosi Olifant',
      role: 'Chief Technology Officer (CTO)',
      focus: 'Technical Architecture & Security',
      profile: 'Oversees all technical development, from system architecture to security protocols. His deep expertise ensures that every solution is built on a robust, scalable, and secure foundation.',
      email: 'Kgosi02@matriarchtech.com',
      icon: '💻'
    },
    {
      name: 'Sbongkwanda Simelani',
      role: 'Lead Full-Stack Developer',
      focus: 'Back-end Logic & Complex Systems',
      profile: 'Specializes in building the powerful, server-side logic that drives complex web applications and e-commerce platforms. He ensures functionality, performance, and database integrity.',
      email: 'Kwanda04@matriarchtech.com',
      icon: '⚙️'
    },
    {
      name: 'Neo Banda',
      role: 'Lead Front-End Developer & UX Designer',
      focus: 'User Experience & Interface Design',
      profile: 'Crafts the visual identity and user journey of every project. Combining an eye for design with clean code, Neo ensures our solutions are not only powerful but also intuitive and engaging for the end-user.',
      email: 'Neo03@matriarchtech.com',
      icon: '🎨'
    }
  ]

  return (
    <>
      <Head>
        <title>Our Team — Matriarch Tech</title>
      </Head>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Meet the Minds Behind the Herd</h1>
            <div className="w-24 h-1 bg-accent-sage mx-auto mb-6"></div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              The strength of Matriarch Tech lies in the diverse expertise and shared vision of our founding team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="card p-8 text-center">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-accent-sage font-bold text-lg mb-3">{member.role}</p>
                <p className="text-sm text-primary-dark/70 font-semibold mb-4">
                  <strong>Focus:</strong> {member.focus}
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">{member.profile}</p>
                <a 
                  href={`mailto:${member.email}`} 
                  className="inline-block text-accent-blue hover:text-accent-sage transition-colors font-medium"
                >
                  📧 {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
