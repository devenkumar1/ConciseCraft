import { Button } from "@/components/ui/button";
import HeroHeader from "@/components/ui/Hero/HeroHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-8 items-center ">
       <HeroHeader/>
    </div>
  );
}
