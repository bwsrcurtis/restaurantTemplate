
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import DividerImage from './components/DividerImage.js';

export default async function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-144px)] ">
        <Hero></Hero>
        <About></About>
        <DividerImage></DividerImage>
      </main>
      <Footer />
    </>
  );
}
