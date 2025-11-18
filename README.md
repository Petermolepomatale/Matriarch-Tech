# Matriarch Tech

**Guided by Wisdom, Built on Strength.**

A full-stack web development company portfolio featuring a futuristic design with 3D animations, built with modern technologies.

## 🚀 Tech Stack

### Frontend
- **Next.js 13** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D graphics and animations

### Backend
- **Node.js** - Runtime environment
- **Fastify** - Fast web framework
- **Prisma** - Database ORM
- **SQLite** - Database (PostgreSQL for production)
- **Zod** - Input validation

## 🎨 Features

- ✨ Futuristic 3D animations with Three.js
- 🎯 Responsive design with Tailwind CSS
- 🔒 Secure backend with input validation
- 📧 Contact form with database storage
- 🎭 Dynamic portfolio and testimonials
- 🌈 Custom Sage & Stone color palette
- ⚡ Fast performance and optimized assets

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Petermolepomatale/Matriarch-Tech.git
cd Matriarch-Tech
\`\`\`

2. Install dependencies:
\`\`\`bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
# Copy .env.example to .env and update values
cp .env.example .env
\`\`\`

4. Initialize the database:
\`\`\`bash
cd backend
npx prisma db push
node prisma/seed.js
\`\`\`

5. Run the development servers:
\`\`\`bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
\`\`\`

6. Open your browser:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

## 📁 Project Structure

\`\`\`
matriarch-tech/
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   └── routes/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.js
│   └── package.json
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── public/
│   └── package.json
└── README.md
\`\`\`

## 🌐 Deployment

### Frontend (Vercel)
\`\`\`bash
cd frontend
vercel deploy
\`\`\`

### Backend (Render/Fly.io)
- Update DATABASE_URL to PostgreSQL
- Set environment variables
- Deploy using platform CLI or dashboard

## 👥 Team

- **Matale Peter Molepo** - CEO
- **Kgosi Olifant** - CTO
- **Sbongkwanda Simelani** - Lead Full-Stack Developer
- **Neo Banda** - Lead Front-End Developer & UX Designer

## 📧 Contact

- Email: hello@matriarchtech.com
- Website: [Coming Soon]

## 📄 License

© 2025 Matriarch Tech. All rights reserved.
