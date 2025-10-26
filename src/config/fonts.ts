// config/fonts.ts
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";

// Main sans-serif font (for body text)
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Monospace font (for code)
export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Heading font (optional - for titles/headings)
export const fontHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Alternative: If you want to use local fonts instead of Google Fonts
/*
import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "../public/fonts/YourFont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YourFont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
*/