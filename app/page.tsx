import Image from "next/image";
import Header from "../components/Header";
import SandBox from "../components/Sandbox";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-grow flex-col items-center justify-center p-24">
        <SandBox />
      </main>
      <Footer />
    </>
  );
}
