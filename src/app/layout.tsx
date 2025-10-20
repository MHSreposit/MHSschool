import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer/footer";

export const metadata = {
  title: "MHS at School",
  icons: {
    icon: "/logomhs.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="layout">
          <Header />
          <main className="conteudo">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}