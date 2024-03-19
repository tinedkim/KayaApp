import Image from "next/image";
import Dashboard from "./ui/dashboard/Dashboard";
import NavigationBar from "./ui/nav/NavigationBar";
import ProfileSection from "./ui/profileSection/ProfileSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center bg-white">
      <NavigationBar />
      <Dashboard />
      <ProfileSection />
    </main>
  );
}
