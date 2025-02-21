"use client";

  import { Geist, Geist_Mono } from "next/font/google";
  import "../styles/globals.css";
  import MainLayout from "../templates/MainLayout";
  import AdminLayout from "../templates/AdminLayout";
  import { usePathname } from "next/navigation";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith("/admin");

    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {isAdminRoute ? (
            <AdminLayout>{children}</AdminLayout>
          ) : (
            <MainLayout>{children}</MainLayout>
          )}
        </body>
      </html>
    );
  }
