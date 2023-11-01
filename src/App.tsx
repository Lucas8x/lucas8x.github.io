import { HashRouter } from 'react-router-dom';

import { Navbar } from './components/navbar';
import { Routes } from './routes';
import { Footer } from './components/footer';

export default function App() {
  return (
    <HashRouter>
      <main className="flex h-screen flex-col justify-between">
        <Navbar />
        <Routes />
        <Footer />
      </main>
    </HashRouter>
  );
}
