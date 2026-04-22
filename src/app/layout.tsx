import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kickstart Marketing - Tu agencia generando reservas",
  description: "Transformá tu agencia de viajes en una máquina de vender. Sistema probado en 90 días.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}