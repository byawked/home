import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "byAWKED",
  description: "a wild description appears...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${courierPrime.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
