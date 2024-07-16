import Image from "next/image";
import Header from "../components/Header";
import FAQComponent from "../components/FAQComponent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="flex flex-grow flex-col items-center justify-center px-6 py-[142px]">
        <FAQComponent />
      </main>
      {/* <Footer /> */}
    </>
  );
}
