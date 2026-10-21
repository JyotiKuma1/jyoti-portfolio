# Jyoti Kumari — Cyber Security & Threat Intelligence Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-88ce02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)

> **Personal portfolio of Jyoti Kumari** — MCA student specializing in Cyber Security at UPES Dehradun. Showcasing practical work across threat intelligence aggregation, digital forensics, incident error detection, and full-stack web applications.

---

## 🌟 Overview & Key Features

- **🛡️ Cybersecurity & Threat Intelligence Showcase**:
  - Highlights experience and projects in threat intelligence data normalization, vulnerability tracking (NVD, CISA KEV, MITRE ATT&CK), and digital forensics.
  - Interactive sections showcasing practical tool experience (Flipper Zero, Alfa wireless adapters, digital forensic acquisition).
- **🔮 Interactive 3D Physics Experience**:
  - Realistic 3D dynamic lanyard/ID badge powered by **Three.js** and physics simulation.
  - Interactive controls with mouse tracking, dynamic mesh deformation, and responsive lighting.
- **🎨 Modern Dark Cybersecurity Aesthetic**:
  - Built with **Tailwind CSS v4** featuring deep charcoal tones, electric cyan highlights, glassmorphic card overlays, and subtle grid backgrounds.
  - Fluid **GSAP** micro-animations and custom **Gooey Nav** navigation transitions.
- **📬 Contact Integration**:
  - Fully working contact form wired with **Web3Forms** for client-side message delivery with honeypot spam protection.
- **📱 Fully Responsive**:
  - Optimized for desktops, tablets, and smartphones with dynamic navigation and adaptive layouts.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, Vanilla CSS Modules |
| **3D & Graphics** | Three.js, Canvas Shaders |
| **Animations** | GSAP (GreenSock) |
| **Forms & Services** | Web3Forms API |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```text
jyoti_portfolio/
├── public/                 # Static assets (images, icons, models)
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── about/          # About section & academic background
│   │   ├── contact/        # Contact page with Web3Forms integration
│   │   ├── experience/     # Internship & practical experience timeline
│   │   ├── projects/       # Detailed project breakdown & case studies
│   │   ├── globals.css     # Global styles & design system tokens
│   │   ├── layout.tsx      # Root application layout & metadata
│   │   └── page.tsx        # Homepage hero & interactive showcase
│   └── components/         # Reusable UI & 3D components
│       ├── ContactForm.tsx # Functional contact form
│       ├── GooeyNav.jsx    # Fluid animated gooey navigation bar
│       ├── Lanyard.jsx     # Interactive 3D physics badge
│       └── Navbar.tsx      # Responsive header navigation
├── .env.example            # Sample environment variables
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.18.0 or newer / v20+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### 1. Clone the Repository

```bash
git clone https://github.com/JyotiKuma1/jyoti-portfolio.git
cd jyoti-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy the sample environment file:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your Web3Forms access key:

```env
# Get a free access key at https://web3forms.com
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Runs the Next.js development server with Turbopack |
| `build` | `npm run build` | Builds the optimized production application |
| `start` | `npm run start` | Starts the production server |
| `lint` | `npm run lint` | Runs ESLint checks across the codebase |

---

## 👩‍💻 About Jyoti Kumari

- **Education**:
  - **Master of Computer Applications (MCA) — Cyber Security** | UPES Dehradun *(2025 – Present)*
  - **Bachelor of Computer Applications (BCA)** | Jamshedpur Women's University *(2021 – 2024)* — *CGPA: 9.72/10.0*
- **Key Experience**:
  - **Cyber Cell Intern** — Cyber Cell Police Station, Dehradun (Wireless security testing, red teaming support, digital forensics)
  - **Error Detection Intern** — Tata Steel, Jamshedpur (Industrial system log analysis & troubleshooting)
  - **Web Developer Intern** — Auto Custer Limited, Jamshedpur (Responsive web development)
- **Connect**:
  - 🌐 GitHub: [@JyotiKuma1](https://github.com/JyotiKuma1)
  - 💼 LinkedIn: [Jyoti Kumari](https://linkedin.com/in/jyoti-gupta-21621226b)
  - 📧 Email: [jkumari75628@gmail.com](mailto:jkumari75628@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, learn from, and adapt for your own work!
