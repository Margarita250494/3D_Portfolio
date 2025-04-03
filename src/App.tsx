import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
} from "./components";

export const App = () => {
  return (
    <>
      <header className="bg-[url('/src/assets/herobg.png')] bg-cover bg-no-repeat bg-center header">
        <Header />
        <Hero />
      </header>
      <main className="wrapper max-w-[90rem] mx-auto">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
