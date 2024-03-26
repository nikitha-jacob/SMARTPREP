import Image from "next/image";
import Hello from "./components/Hello";
import Jovaan from "./components/Jovaan";

export default function Home() {
  return (
    <main className="h-full w-screen bg-red-300">
      <Hello/>
      <Jovaan/>
    </main>
  );
}
