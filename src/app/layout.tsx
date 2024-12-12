import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/navigation/Header";

export const metadata: Metadata = {
  title: "Dolarucos 💸",
  description: "Fijate el precio de todos los tipos de dolares cada 1 minuto.",
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'normal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
