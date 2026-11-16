import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Credentials } from "@/components/sections/credentials";
import { Contact } from "@/components/sections/contact";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
