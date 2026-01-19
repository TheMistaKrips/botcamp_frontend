import React, { Suspense, useState, useEffect, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import StickyLiquidNav from './components/StickyLiquidNav';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import './index.css';

// --- LAZY LOADING ---
// Hero грузим lazy, но с высоким приоритетом (в коде ниже)
// Остальные блоки - стандартный lazy
const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const Pricing = lazy(() => import('./components/Pricing'));

// Заглушка для блоков (скелетон)
const BlockLoader = () => (
  <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
    <div className="loader-pulse" style={{ animation: 'pulse 1.5s infinite', fontWeight: 600 }}>Loading...</div>
    <style>{`@keyframes pulse { 0% {opacity:0.3} 50% {opacity:1} 100% {opacity:0.3} }`}</style>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки ресурсов (шрифты, картинки)
    // В реальном проекте можно ждать window.onload
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды показываем прелоадер

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ПРЕЛОАДЕР НА ВЕСЬ ЭКРАН */}
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <div className="App">
          <Header />
          <StickyLiquidNav />

          <main>
            {/* HERO: Грузим первым, сразу после прелоадера */}
            <Suspense fallback={<div style={{ height: '100vh', background: '#0f172a' }} />}>
              <Hero />
            </Suspense>

            {/* FEATURES: Грузим когда доскроллим (или сразу после Hero) */}
            <Suspense fallback={<BlockLoader />}>
              <Features />
            </Suspense>

            {/* PRICING */}
            <Suspense fallback={<BlockLoader />}>
              <Pricing />
            </Suspense>

            {/* FOOTER (Обычный импорт, он легкий) */}
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

export default App;