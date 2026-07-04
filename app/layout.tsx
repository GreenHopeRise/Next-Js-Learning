import Footer from "./footer/page";
import "./globals.css";
import Navbar from "./navbar/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-green-900 text-amber-300">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}