import type { Metadata } from "next";
import "./globals.css";
import Header from './header.tsx';

export const metadata: Metadata = {
  title: "Sussus Amogus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="centre-flexbox">
          <div className="user-info">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
