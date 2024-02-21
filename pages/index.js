import { Inter } from "next/font/google";
import CardSection from "@/components/CardSection";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });
import Header from "../components/Header";

export default function Home() {
  return (
    <div
      className={`wrapper min-h-screen flex flex-col items-center justify-center px-36 ${inter.className}`}
    >
      <Header />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <CardSection />
      </main>
    </div>
  );
}
