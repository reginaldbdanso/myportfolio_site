import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main">
        <Hero />

        <Section
          id="work"
          eyebrow="Selected work"
          title="Things I've built"
          intro="A mix of open-source tools and client projects. Where the code is public, the repository is linked."
        >
          <Work />
        </Section>

        <Section id="about" eyebrow="About" title="Who you'd be working with">
          <About />
        </Section>

        <Section
          id="services"
          eyebrow="Services"
          title="How I can help"
          intro="Three kinds of work I take on. Most engagements are some combination of the three."
        >
          <Services />
        </Section>

        <section id="contact" className="border-t border-line py-20 sm:py-28">
          <div className="shell">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
