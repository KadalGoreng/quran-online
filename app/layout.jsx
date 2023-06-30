import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Quran App",
  description: "Quran App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#c0e0b1]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
