import { useState } from 'react';
import Header from './assets/components/Header';
import MobileMenu from './assets/components/MobileMenu';
import ProfilePage from './assets/components/ProfilePage';
import Footer from './assets/components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="container mx-auto max-w-4xl p-4 py-8 md:p-8">
        <ProfilePage />
      </main>
      <Footer />
    </>
  );
}