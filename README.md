# Akoma+ Health & Wellness

A modern Vue.js web application for **Akoma+ Health & Wellness**, a healthcare platform focused on heart disease prevention and screening services in Africa. The application provides comprehensive information about cardiac health screening, workplace wellness programs, and partnership opportunities.

## 🏥 About the Application

Akoma+ is a digital health platform that provides routine and comprehensive screening for heart disease and stroke risk factors. The platform brings screening services closer to communities through mobile medical vans and offers expert-led prevention strategies.

### Key Features

- **Individual Heart Screening**: Information and booking for cardiac risk assessments
- **Workplace Wellness Programs**: Corporate health screening packages
- **Partnership Opportunities**: Collaboration with businesses, insurance providers, and hospitals
- **Educational Content**: Health education materials and FAQs about heart health
- **Contact & Booking Forms**: Integrated email service for inquiries and appointments
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠 Tech Stack

- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite 4.x
- **Routing**: Vue Router 4
- **Styling**: Tailwind CSS 3.x
- **Icons**: Heroicons Vue
- **SEO**: Unhead for meta tag management
- **Email Service**: EmailJS for contact forms
- **Fonts**: Open Sans (via Fontsource)
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
Akomaplus/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css          # Global styles and Tailwind imports
│   │   └── images/               # Static images (icons, services, team, etc.)
│   ├── components/
│   │   ├── Home/                 # Homepage components (sliders, services, FAQs)
│   │   ├── services/             # Service-related components
│   │   ├── about/                # About page components (team cards, profiles)
│   │   ├── Contact/              # Contact form and header
│   │   ├── layouts/              # Layout components (Navbar, Footer, etc.)
│   │   └── ui/                   # Reusable UI components
│   ├── router/
│   │   └── index.js              # Route definitions
│   ├── utils/
│   │   ├── data/                 # Static data (services, FAQs, team, testimonials)
│   │   └── libraries/            # Third-party library configurations
│   ├── views/                    # Page components (Home, Services, About, Contact)
│   ├── App.vue                   # Root component with layout and SEO
│   └── main.js                   # Application entry point
├── public/                       # Static assets
├── index.html                    # HTML entry point
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── package.json                  # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16.x or higher
- **npm**: v7.x or higher

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/LeanIcon/Akomaplus.git
   cd Akomaplus
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start development server**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:4001`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 4001 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Lint and fix files with ESLint |
| `npm run format` | Format code with Prettier |

## 📄 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home.vue | Landing page with services, FAQs, and educational content |
| `/services` | Services.vue | Detailed service offerings and booking forms |
| `/about-us` | AboutUs.vue | Team information and company background |
| `/contact-us` | ContactUs.vue | Contact form and information |

## 🎨 Styling & Design

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- **Primary Color**: `#480000` (dark red)
- **Secondary Color**: `#FFB845` (golden yellow)
- **Font Family**: Open Sans for both headings and body text
- **Custom Container Padding**: Responsive padding (1rem to 5rem)
- **Custom Breakpoints**: `xs: 480px`, `sm: 600px`

### CSS Architecture

- Global styles in `src/assets/css/main.css`
- Tailwind directives and custom CSS variables
- Component-scoped styles using Vue SFC `<style>` blocks

## 📧 Email Integration

The contact form uses **EmailJS** for sending messages:
- Service ID: `service_ohrt6xq`
- Template ID: `template_6xpak2y`
- Public Key: `1AbAB5QQapUQcB_UU`

Configured in `src/components/Contact/ContactForm.vue`

## 🗂 Data Management

Static data is organized in `src/utils/data/`:
- `services.js` - Service listings and health packages
- `faqs.js` - Frequently asked questions
- `team.js` - Team member information
- `testimonies.js` - Customer testimonials
- `pages.js` - Page metadata

## 🔧 Configuration Files

- **vite.config.js**: Vite configuration with `@` alias for `src/`
- **tailwind.config.js**: Custom Tailwind theme and content paths
- **postcss.config.js**: PostCSS configuration for Tailwind
- **jsconfig.json**: JavaScript path mapping for VS Code
- **.eslintrc.cjs**: ESLint rules and Vue plugin configuration
- **.prettierrc.json**: Prettier formatting rules

## 🌐 SEO & Meta Tags

SEO is managed using `@unhead/vue` in `App.vue`:
- Dynamic page titles
- Open Graph tags for social sharing
- Twitter Card metadata
- Structured meta descriptions

## 🎯 Recommended IDE Setup

- **Editor**: [VS Code](https://code.visualstudio.com/)
- **Extensions**:
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 language support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Code linting
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatting
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind autocomplete

**Note**: Disable Vetur if installed, as it conflicts with Volar.

## 📦 Build & Deployment

### Production Build

```sh
npm run build
```

This generates optimized static files in the `dist/` directory.

### Preview Production Build

```sh
npm run preview
```

### Deployment

The built application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow the existing code structure and naming conventions
- Run `npm run lint` before committing
- Use `npm run format` to ensure consistent formatting
- Write meaningful commit messages

## 📝 License

This project is private and proprietary to Akoma+ Health & Wellness.

## 📞 Contact

For questions or support, visit the contact page at `/contact-us` or reach out to the Akoma+ team.

---

**Akoma+ Health & Wellness** - Preventing cardiac deaths through early screening.
