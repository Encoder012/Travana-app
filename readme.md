# 🚗 Travana - Decentralized Ride-Sharing Platform

### Team Details
- **Team name**: EncoderDecoder  
- **Member1**: Krishna Aggarwal  
- **Member2**: Dhruv Kalra  
- **Track**: Aptos  

---

**Working Model**: https://travana-working.vercel.app

![image](https://github.com/user-attachments/assets/e8cff37a-d36d-4983-bf53-013e9141513b)

---

**Website**: https://travana-app-xi.vercel.app

---

<div align="center">

  **Privacy-First • Blockchain-Powered • Community-Owned**

</div>

## 🌟 Overview

Travana is the world's first **privacy-preserving**, **blockchain-powered** ride-sharing platform built on the Aptos blockchain. We revolutionize mobility by putting user privacy and community empowerment first — using fuzzy geolocation, peer-to-peer GPS exchange, tokenized incentives, and smart contract-based payments.

With Travana, every ride earns you rewards. Riders and drivers become stakeholders in a tokenized ecosystem where activity, loyalty, and sustainability are monetized. Our protocol ensures secure, scalable, and community-driven transportation without compromising data privacy.

## ✨ Key Features

- 🔒 **Fuzzy Geolocation Privacy**: Only your zone is shared, not your GPS
- 🔗 **Blockchain Escrow Payments**: Tamper-proof, transparent ride payments on Aptos
- 🤝 **Peer-to-Peer GPS Sharing**: Exact pickup/drop shared only with matched driver via WebRTC
- 🎯 **AI-Based Matching & Pricing**: Ride pairing and pricing based on behavior, demand, and zone
- 💎 **NFT Ride Receipts**: Verifiable proof-of-ride with metadata stored on-chain
- 🪙 **Token & Points Rewards**: Earn $TRAV tokens and redeemable points on every ride
- 🗳 **Governance Ready**: DAO model to propose POIs, vote on features, and drive platform evolution

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/travana/travana-app.git
cd travana-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app in action! 🎉

## 🏗️ Project Structure

```
travana-app/
├── app/                    # Next.js 13+ App Router
│   ├── page.tsx           # Home page
│   ├── promotions/        # Promotions & offers
│   ├── history/           # Ride history
│   ├── profile/           # User profile
│   ├── ride-booking/      # Booking interface
│   ├── about/             # About page
│   ├── brochure/          # Marketing brochure
│   └── logo-showcase/     # Logo variations
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   └── TravanaLogo.tsx    # Logo component
├── public/               # Static assets
├── styles/               # Global styles
└── README.md            # You are here!
```

## 🎨 Design System

### Colors
- **Primary**: Lime Green (#a3e635)
- **Background**: Dark Gray (#1f2937)
- **Cards**: Glass morphism with backdrop blur
- **Text**: White (#ffffff) with gray variants

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Glass Cards**: Translucent backgrounds with blur effects
- **Primary Buttons**: Lime green with hover animations
- **Status Badges**: Rounded pills with color coding

## 🔧 Technology Stack

### Frontend
- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS transitions + custom keyframes

### Blockchain
- **Network**: Aptos Blockchain
- **Smart Contracts**: Move language
- **Wallet Integration**: Aptos Wallet Adapter
- **NFTs**: Aptos Token Standard (proof-of-ride receipts)
- **Escrow Logic**: On-chain payments with multisig or dual-confirmation release

### Features
- **Geolocation**: Fuzzy geohashing for matching
- **P2P GPS**: WebRTC-based encrypted location sharing
- **AI Matching**: Contextual ride pairing via zone data
- **Rewards**: $TRAV token integration + off-chain points store
- **Push Notifications**: Service workers + token-based alerts

## 📱 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Testing
npm run test         # Run tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker
```bash
# Build image
docker build -t travana-app .

# Run container
docker run -p 3000:3000 travana-app
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Travana

# Blockchain
NEXT_PUBLIC_APTOS_NETWORK=testnet
NEXT_PUBLIC_APTOS_NODE_URL=https://fullnode.testnet.aptoslabs.com/v1

# API Keys
NEXT_PUBLIC_MAPS_API_KEY=your_maps_api_key
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Database (if using)
DATABASE_URL=your_database_url
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Style

- Use **TypeScript** for all new code
- Follow **ESLint** and **Prettier** configurations
- Write **meaningful commit messages**
- Add **tests** for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Aptos Labs** - For the amazing blockchain infrastructure
- **Next.js Team** - For the incredible React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library

## 📞 Support & Community

- **Website**: [https://travana-app-xi.vercel.app/](https://travana-app-xi.vercel.app/)

## 🗺️ Roadmap

### Phase 1 - Foundation ✅
- [x] Core UI/UX design
- [x] Basic navigation and routing
- [x] Responsive design implementation
- [x] Logo and branding

### Phase 2 - Blockchain Integration 🚧
- [ ] Aptos wallet connection
- [ ] Smart contract deployment (escrow + NFT)
- [ ] Ride NFT minting system
- [ ] TRAV token rewards mechanism

### Phase 3 - Core Features 📋
- [ ] Real-time ride matching (AI + zone based)
- [ ] Fuzzy location & POI clustering
- [ ] P2P WebRTC pickup/drop sharing
- [ ] Driver verification + reputation score

### Phase 4 - Advanced Features 🔮
- [ ] Token staking & loyalty tiers
- [ ] DAO-based community voting
- [ ] Analytics dashboard + ride trends
- [ ] Mobile app release (React Native)

## 📊 Project Stats

- **Lines of Code**: ~5,000+
- **Components**: 15+
- **Pages**: 7
- **Supported Platforms**: Web, iOS, Android
- **Blockchain**: Aptos Testnet

---

<div align="center">
  <p>Made with ❤️ by the Travana Team</p>
  <p>
    <a href="https://travana.app">Website</a> •
    <a href="https://docs.travana.app">Docs</a> •
    <a href="https://discord.gg/travana">Community</a>
  </p>
</div>
