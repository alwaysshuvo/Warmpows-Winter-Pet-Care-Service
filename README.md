# 🐾 WarmPaws – Winter Pet Care Platform

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-12.4.0-FFCA28?logo=firebase)
![License](https://img.shields.io/badge/License-MIT-green)

A comprehensive winter pet care platform connecting pet owners with trusted veterinarians, grooming services, and expert pet care guidance. Built with modern web technologies for seamless user experience.

[Live Demo](#-live-demo--repository) • [Features](#-key-features) • [Tech Stack](#-tech-stack) • [Installation](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## 🌐 Live Demo & Repository

- 🔗 **Live**: https://warpaws-pet-care.netlify.app/
- 📦 **Repository**: https://github.com/alwaysshuvo/Warmpows-Winter-Pet-Care-Service

---

## 📌 Project Overview

**WarmPaws** is a feature-rich pet care platform that empowers pet owners to:

- ✅ Discover & book winter pet care services with expert veterinarians
- ✅ Browse comprehensive pet winter care guides and seasonal tips
- ✅ Authenticate securely with Email/Password & Google Sign-In
- ✅ Manage personal profiles and service bookings
- ✅ Read expert reviews and ratings from other pet owners
- ✅ Access responsive, animated UI across all devices
- ✅ Find emergency support resources 24/7

---

## 📸 Screenshots

### 🏠 Homepage Preview
![Homepage](https://api.pikwy.com/web/691d876396641b00f53002b6.jpg)

---

## ⭐ Key Features

### 🏥 **Expert Pet Care Services**  
Browse and book professional veterinary services, grooming, boarding, and specialized winter pet care from trusted professionals.

### 👨‍⚕️ **Expert Veterinarians Directory**  
Connect with certified veterinarians specializing in winter pet health and seasonal care needs.

### 📚 **Winter Pet Care Guide**  
Comprehensive seasonal tips, best practices, and expert advice for keeping pets healthy during cold weather.

### 💬 **User Reviews & Ratings**  
Real feedback from pet owners to help you choose the best services for your furry friends.

### 🔐 **Secure Authentication**  
Multiple authentication methods:
- ✉️ **Email/Password Authentication** – Secure account creation and login
- 🔐 **Google OAuth 2.0** – One-click social authentication
- 🔒 **Password Recovery** – Forgot password functionality

### 📱 **Responsive Design**  
Fully responsive interface optimized for mobile, tablet, and desktop devices.

### ✨ **Rich Animations & Interactions**  
- Framer Motion smooth transitions
- Swiper carousel sliders
- AOS scroll animations
- Toast notifications

### 👤 **User Profiles**  
Personalized user dashboard to manage bookings, preferences, and account settings.

### 🆘 **Support Center**  
Comprehensive FAQ and emergency support resources for pet owners.

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.1.1** – UI component library with hooks
- **Vite 7.1.7** – Lightning-fast build tool

### **Styling & UI**
- **Tailwind CSS 4.1.17** – Utility-first CSS framework
- **Framer Motion 12.23.24** – Advanced animation library
- **Swiper 12.0.3** – Modern carousel/slider
- **AOS 2.3.4** – Animate on scroll library
- **Animate.css 4.1.1** – Predefined animations

### **State Management & Routing**
- **React Router DOM 7.9.4** – Client-side routing
- **React Context API** – State management

### **Authentication & Backend**
- **Firebase 12.4.0** – Authentication & services
- **Firebase Authentication** – Secure user management

### **Development Tools**
- **ESLint 9.36.0** – Code quality
- **Vite plugins** – React & Tailwind integration

### **UI Components**
- **React Icons 5.5.0** – Icon library
- **React Hot Toast 2.6.0** – Notification system

---

## 📁 Project Structure

```
Warmpows-Winter-Pet-Care-Service/
├── src/
│   ├── Components/
│   │   ├── ExpertCard/              # Vet & expert cards
│   │   ├── Footer/                  # Footer component
│   │   ├── HeroCards/               # Service hero cards
│   │   ├── HeroSlider/              # Homepage slider
│   │   ├── LoadingSpinner/          # Loading animation
│   │   ├── Navbar/                  # Navigation bar
│   │   ├── Newsletter/              # Newsletter signup
│   │   ├── ReviewSection/           # Customer reviews
│   │   ├── WhyChooseUs/             # Why choose section
│   │   ├── WinterTips/              # Seasonal tips
│   │   ├── Filters/                 # Service filters
│   │   ├── Sorting/                 # Sort options
│   │   └── ExpertCard/              # Expert profile card
│   │
│   ├── Pages/
│   │   ├── Home/                    # Homepage
│   │   ├── Services/                # All services page
│   │   ├── ServiceDetails/          # Service detail view
│   │   ├── Profile/                 # User profile
│   │   ├── Login/                   # Login page
│   │   ├── Signup/                  # Registration page
│   │   ├── ForgotPassword/          # Password recovery
│   │   ├── About/                   # About page
│   │   ├── Contact/                 # Contact page
│   │   ├── Support/                 # Support center
│   │   ├── ExpertVets/              # Vets directory
│   │   └── ErrorPage/               # 404 page
│   │
│   ├── Provider/
│   │   └── AuthProvider.jsx         # Authentication context
│   │
│   ├── Router/
│   │   ├── router.jsx               # Route configuration
│   │   ├── PrivateRoute/            # Protected routes
│   │   └── PublicRoute/             # Public routes
│   │
│   ├── Firebase/
│   │   └── firebase.config.js       # Firebase setup
│   │
│   ├── data/
│   │   ├── Vets/                    # Vets data
│   │   └── WinterTips/              # Tips data
│   │
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   ├── App.css                      # App styles
│   └── index.css                    # Global styles
│
├── public/
│   ├── services.json                # Services data
│   └── _redirects                   # Netlify routing
│
├── tailwind.config.js               # Tailwind configuration
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint rules
├── package.json                     # Dependencies & scripts
├── .env                             # Environment variables
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0+ & npm
- **Git** installed
- A **Firebase project** (for authentication)
- A **Google OAuth 2.0** application

### Installation

**Step 1: Clone the Repository**
```bash
git clone https://github.com/alwaysshuvo/Warmpows-Winter-Pet-Care-Service.git
cd Warmpows-Winter-Pet-Care-Service
```

**Step 2: Install Dependencies**
```bash
npm install
```

**Step 3: Setup Environment Variables**

Create a `.env` file in the root directory:
```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_measurementId=your_firebase_measurement_id
```

**Step 4: Run Development Server**
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

**Step 5: Build for Production**
```bash
npm run build
```

**Step 6: Preview Production Build**
```bash
npm run preview
```

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |

---

## 🔐 Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable **Authentication** → Email/Password & Google providers
3. Copy your Firebase config credentials
4. Add them to `.env` file
5. Deploy Firestore rules (if using database)

---

## 🌟 Features in Detail

### **Authentication Flow**
- Email/Password signup with validation
- Google OAuth 2.0 integration
- Forgot password recovery
- Session management
- Protected routes for authenticated users

### **Service Discovery**
- Browse all available services
- Filter by category
- Sort by rating/price/popularity
- Service detail pages with reviews
- Expert consultant profiles

### **User Dashboard**
- View profile information
- Manage bookings
- Update preferences
- View booking history
- Download invoices

### **Content Management**
- Winter care tips & guides
- Expert veterinarian profiles
- Customer testimonials
- Newsletter subscription
- FAQ support section

### **Responsive Features**
- Mobile-first design
- Touch-friendly navigation
- Optimized images
- Fast load times
- Progressive enhancement

---

## 🎨 Design System

### **Color Palette**
- Primary: Blue (`#3B82F6`)
- Accent: Rose Pink (`#F43F5E`)
- Success: Green (`#10B981`)
- Neutral: Gray (`#6B7280`)

### **Typography**
- Headings: Bold, 24-64px
- Body: Regular, 14-18px
- Mono: Code snippets

### **Animations**
- Page transitions
- Card hover effects
- Smooth scrolling
- Loading states
- Toast notifications

---

## 🧪 Testing & Quality

Run linting to check code quality:
```bash
npm run lint
```

Fix linting issues automatically where possible:
```bash
npm run lint -- --fix
```

---

## 🚢 Deployment

### Netlify Deployment
1. Push to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy

### Vercel Deployment
```bash
npm install -g vercel
vercel
```

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |
| Mobile Safari | iOS 12+ |
| Chrome Mobile | Latest |

---

## 🐛 Known Issues & Limitations

- Real-time updates require Firestore setup
- Some features require Firebase admin permissions
- Image uploads limited to Firebase storage size
- Offline functionality limited

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** – see the LICENSE file for details.

---

## 👨‍💼 Author

**Shuvo Ahmed**
- GitHub: [@alwaysshuvo](https://github.com/alwaysshuvo)
- Portfolio: [View](https://yourportfolio.com)

---

## 🙏 Acknowledgments

- Firebase team for backend services
- React community for excellent documentation
- Tailwind CSS for utility-first styling
- All contributors and testers

---

## 📞 Support & Contact

- 📧 **Email**: support@warmpaws.com
- 💬 **Discord**: [Join Community](#)
- 🐛 **Issues**: [GitHub Issues](https://github.com/alwaysshuvo/Warmpows-Winter-Pet-Care-Service/issues)
- 💡 **Discussions**: [GitHub Discussions](https://github.com/alwaysshuvo/Warmpows-Winter-Pet-Care-Service/discussions)

---

## 🔗 Relevant Resources

- 🐾 Live Project: https://warpaws-pet-care.netlify.app/
- 🌬️ Tailwind Docs: https://tailwindcss.com/
- ⚛️ React Docs: https://react.dev/
- 🔥 Firebase Docs: https://firebase.google.com/
- 🎬 Framer Motion: https://www.framer.com/motion/
- 🎪 Swiper: https://swiperjs.com/

---

<div align="center">

### Made with ❤️ for Pet Lovers Everywhere

⭐ **Star this repo** if you found it helpful!

[⬆ Back to top](#-warmpaws--winter-pet-care-platform)

</div>