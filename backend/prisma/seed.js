
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.project.createMany({
    data: [
      { title: 'Savanna Blooms', description: 'E-commerce site with custom CMS & payments', slug: 'savanna-blooms' },
      { title: 'The Urban Elephant', description: 'Non-profit donor & volunteer management app', slug: 'urban-elephant' }
    ]
  })

  await prisma.testimonial.createMany({
    data: [
      { author: 'Client A', content: "Matriarch Tech didn't just build us a website; they gave us a thriving online community." },
      { author: 'Client B', content: "Their strategic approach was a game-changer. They remembered every detail." }
    ]
  })

  console.log('Seed complete')
}

main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
