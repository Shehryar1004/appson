import Head from 'next/head';
import { Hero, Introduction, Features, Screenshots, Download, Rating, Contact, Footer } from '../src/sections/index';

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Appson</title>
      </Head>
      <Hero />
      <Introduction />
      <Features />
      <Screenshots />
      <Download />
      <Rating />
      <Contact />
      <Footer />
    </div>
  );
}
