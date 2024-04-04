import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./ui/nav/NavigationBar";
import ProfileSection from "./ui/profileSection/ProfileSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaya",
  description: "Kaya, home for your dog's needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-full flex-row items-center bg-white columns-3">
          <NavigationBar />
          {children}
          <ProfileSection />
        </main>
      </body>
    </html>
  );
}
