import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Cards from "./components/Cards";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Cards />
          <Services />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
