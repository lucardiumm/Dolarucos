import type { Metadata } from "next";
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Dolarucos - Cotizacion del dolar USDT",
  description: "No es necesario describir este increible proyecto ;)",
};

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
        {children}
      </body>
    </html>
  );
}
