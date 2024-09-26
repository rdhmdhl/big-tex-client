import type { Metadata } from "next";
import { Mitr } from 'next/font/google';
import "./styles/globals.css";
import TopBar from "./components/TopBar";
import { Providers } from "./context/providers";

const mitr = Mitr({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Big Texas Ent</title>
      </head>
      <body className={`h-full w-full ${mitr.className}`}>
        <Providers>
          <TopBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
