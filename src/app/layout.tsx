import type { Metadata } from "next";
import './styles.css'
import { cookies } from "next/headers";
import {  DARK_TOKENS, LIGHT_TOKENS } from "@/constants";

import ThemeToggle from "@/components/ThemeToggle";

import { Inter } from 'next/font/google'
 
export const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const savedTheme = cookies().get(
    'color-theme'
  );
  const theme = savedTheme?.value || 'light';

 

  return (
    <html lang="en" data-color-theme={theme}
    className={inter.className}
    style={
      theme === 'light'
        ? LIGHT_TOKENS
        : DARK_TOKENS
    }>
      <body>
   
        {children}
      </body>
    </html>
  );
}
