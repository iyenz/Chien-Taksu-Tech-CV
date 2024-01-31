//components
import Hero from "/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Cta from "@/components/Cta";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Work/>
      <Cta/>
      <Contact/>
    </main>
  );
}


