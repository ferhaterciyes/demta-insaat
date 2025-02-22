"use client";
import MainLayout from "../templates/MainLayout";
import AdminLayout from "../templates/AdminLayout";
import { usePathname } from "next/navigation";
import '../pages/style/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isAdminRoute ? (
          <AdminLayout>{children}</AdminLayout>
        ) : (
          <MainLayout>{children}</MainLayout>
        )}
      </body>
    </html>
  );
}
