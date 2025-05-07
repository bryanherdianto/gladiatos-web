import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gladiatos UI",
  description: "Gladiatos from Tim Robotika Universitas Indonesia",
  icons: "/icon_web_gladiatos.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="bg-center bg-fixed max-w-[1440px] mx-auto" style={{ backgroundImage: "url('/background.svg')" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
