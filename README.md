# Ruben Santana - Portfolio

A modern, responsive portfolio website showcasing blockchain development expertise, Web3 projects, and professional experience.

## 🚀 Live Demo

Visit the live portfolio: https://rubensantana.com

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light mode support
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Smooth animations, hover effects, and scroll reveals
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Featured projects with detailed descriptions and links
- **Resume Access**: Direct access to CV/Resume from the hero section
- **Blog Integration**: Latest articles and insights
- **Social Links**: Easy access to professional networks

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Language**: TypeScript
- **Package Manager**: Yarn

## 📁 Project Structure

```
ruben-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── contact-form.tsx    # Contact form with EmailJS
│   ├── enhanced-card.tsx   # Project cards
│   ├── navigation.tsx      # Navigation bar
│   ├── scroll-reveal.tsx   # Animation components
│   └── ...
├── public/
│   ├── docs/               # Resume/CV files
│   └── images/             # Project images and assets
├── lib/
│   └── utils.ts            # Utility functions
└── styles/
    └── globals.css         # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ruben-portfolio.git
   cd ruben-portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

The contact form uses EmailJS for email delivery. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Add your credentials to `.env.local`

## 🎨 Customization

### Colors and Theme
The portfolio uses a custom emerald/teal color scheme. To modify:

1. Update Tailwind config in `tailwind.config.js`
2. Modify CSS variables in `app/globals.css`
3. Update component classes throughout the codebase

### Content Updates
- **Personal Info**: Edit `app/page.tsx` for name, title, description
- **Projects**: Update the `featuredProjects` and `projects` arrays
- **Skills**: Modify the `skills` array
- **Experience**: Update the experience section in the About component
- **Images**: Replace images in `public/images/`

### Adding New Sections
1. Create new components in the `components/` directory
2. Import and add to `app/page.tsx`
3. Follow the existing design patterns and spacing

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Flexible grid layouts
- Responsive typography
- Mobile-optimized navigation
- Touch-friendly buttons and links

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/ruben-portfolio/issues).

## 📞 Contact

**Ruben Santana**
- Email: [your-email@example.com]
- LinkedIn: [https://www.linkedin.com/in/rubensantana/](https://www.linkedin.com/in/rubensantana/)
- GitHub: [@santanaruben](https://github.com/santanaruben)
- Telegram: [@rubensantana](https://t.me/rubensantana)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!
