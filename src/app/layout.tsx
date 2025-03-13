import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
        <footer className="p-6 text-center text-sm text-muted-foreground border-t border-white/10">
          <p>© 2023 Filozoflar Listesi. Tüm hakları saklıdır.</p>
        </footer>
      </body>
    </html>
  );
}
