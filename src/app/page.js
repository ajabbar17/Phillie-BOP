import Hero from "@/components/Homepage/Hero";
import Vision from "@/components/Homepage/Vision";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#1E1E1E]">
      
      <Hero/>
      <Vision/>
    </main>
  );
}
