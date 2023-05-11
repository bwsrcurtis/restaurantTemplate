
import Menu from './components/Menu.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';

export default async function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-144px)] ">
        <Hero></Hero>
        <Menu></Menu>
      </main>
      <Footer />
    </>
  );
}
