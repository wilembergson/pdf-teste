'use client'
import Bloco from "./components/Bloco";
import PrintButton from "./components/PrintButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <PrintButton />
    </main>
  );
}
