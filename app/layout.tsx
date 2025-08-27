import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gladiatos UI",
  description: "Gladiatos from Tim Robotika Universitas Indonesia",
  icons: "/Logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <div className="max-w-[1440px] mx-auto relative bg-black">
          <div className="bg-center z-1 fixed top-0 w-screen h-screen bg-cover bg-black" style={{ backgroundImage: "url('/background.svg')" }}></div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
