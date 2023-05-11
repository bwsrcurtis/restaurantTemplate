
import Form from './components/Form.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

export default async function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-112px)] ">
        <Form></Form>
      </main>
      <Footer />
    </>
  );
}
