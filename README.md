# Anas AlGhannam - Portfolio

A modern, minimalistic portfolio website showcasing my work as a Front-End Developer and AI & ML Enthusiast. Built with React, TypeScript, and Tailwind CSS, featuring a clean design with lime-gray gradient accents and full bilingual support (English & Arabic).

## ✨ Features

- **Modern Design**: Floating navbar with icon-only navigation and tooltips
- **Two-Column Layout**: Sticky profile card with scrollable content sections
- **Responsive**: Mobile-first design that adapts beautifully to all screen sizes
- **Bilingual Support**: Full i18n implementation with English and Arabic translations
- **Dark Theme**: Optimized dark mode with custom lime-gray gradient accent colors
- **Type-Safe**: Built with TypeScript for enhanced developer experience
- **Performance Optimized**: Lightning-fast with Vite build system

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool
- **Tailwind CSS v4** - Utility-first CSS framework

### UI Components

- **Radix UI** - Accessible component primitives
- **Shadcn UI** - Beautifully designed components
- **Lucide React** - Icon library

### Internationalization

- **i18next** - i18n framework
- **react-i18next** - React integration
- **i18next-browser-languagedetector** - Automatic language detection

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/AnasAlghannam/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── profilepic.jpeg      # Profile photo
│   └── template.png          # Design reference
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable UI components (Radix/Shadcn)
│   │   ├── navbar.tsx        # Icon-based floating navbar
│   │   ├── footer.tsx        # Minimal footer
│   │   ├── ProfileCard.tsx   # Left-side profile card
│   │   ├── ExperienceSection.tsx  # Work experience section
│   │   └── ProjectsSection.tsx    # Projects showcase
│   ├── pages/
│   │   └── Home.tsx          # Main homepage layout
│   ├── i18n/
│   │   ├── config.ts         # i18n configuration
│   │   └── locales/
│   │       ├── en/           # English translations
│   │       └── ar/           # Arabic translations
│   ├── hooks/
│   │   └── useI18n.ts        # Translation hook
│   ├── config/
│   │   └── site.ts           # Site configuration
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles & theme
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🌐 Internationalization

The portfolio supports English and Arabic with complete translations for all content including:

- Profile information
- Experience descriptions
- Project details
- UI labels and navigation

### Adding New Translations

1. Add translation keys to `src/i18n/locales/en/translation.json`
2. Add corresponding translations to `src/i18n/locales/ar/translation.json`
3. Use the `useTranslation` hook in components:

```tsx
import { useTranslation } from "@/hooks/useI18n";

export const MyComponent = () => {
  const { t } = useTranslation();

  return <h1>{t("myTranslationKey")}</h1>;
};
```

## 🎨 Customization

### Theme Colors

The theme uses a lime-gray gradient accent. To customize colors, edit `src/index.css`:

```css
.dark {
  --primary: oklch(0.75 0.15 130); /* Lime accent */
  --ring: oklch(0.75 0.15 130);
}
```

### Profile Information

Update your profile details in `src/i18n/locales/en/translation.json` and `src/i18n/locales/ar/translation.json`:

```json
{
  "profileName": "Your Name",
  "profileTitle": "Your Title",
  "profileLocation": "Your Location"
}
```

Update profile image by replacing `public/profilepic.jpeg`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it and customize it for your own use!

## 📄 License

MIT License - feel free to use this project as inspiration for your own portfolio.

## 👤 Author

**Anas AlGhannam**

- GitHub: [@AnasAlghannam](https://github.com/AnasAlghannam)
- LinkedIn: [AnasAlghannam](https://linkedin.com/in/AnasAlghannam)
- Email: anas.alghannam00@gmail.com

---

Built with ❤️ using React & TypeScript
