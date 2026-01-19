import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Логика отслеживания скролла и размера экрана
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 968);
            if (window.innerWidth >= 968) setMobileMenuOpen(false);
        };

        // Инициализация
        checkMobile();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Конфигурация пружины для "Apple-like" физики
    const springTransition = {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8
    };

    return (
        <AnimatePresence>
            <motion.header
                // --- 1. АНИМАЦИЯ ПОЯВЛЕНИЯ (Entrance) ---
                initial={{ y: -100, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1], // Custom Bezier для плавности
                    delay: 0.2 // Небольшая задержка при загрузке
                }}

                // --- 2. ЛОГИКА "ЖИВОГО" ОСТРОВА ---
                layout
                // layout позволяет блоку плавно менять размеры (ширину/высоту) без лагов

                style={{
                    position: 'fixed',
                    // --- 3. FIX "УЛЕТАНИЯ" ВПРАВО ---
                    // Используем margin: auto для центровки, это надежнее чем transform
                    left: 0,
                    right: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto',

                    // Динамический отступ сверху
                    top: scrolled ? '10px' : '24px',

                    // Ширина: На мобилке широкая, на ПК - по контенту
                    width: isMobile ? '92%' : 'fit-content',
                    maxWidth: '1200px', // Ограничитель
                    minWidth: isMobile ? 'auto' : '600px',

                    // Стили стекла
                    background: 'rgba(255, 255, 255, 0.9)', // Чуть плотнее фон
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '32px',
                    zIndex: 1000,

                    // Тени
                    boxShadow: scrolled
                        ? '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0,0,0,0.05)'
                        : '0 4px 12px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0,0,0,0.02)',

                    overflow: 'hidden' // Обрезаем контент при анимации
                }}
            >
                <motion.div
                    layout="position" // Содержимое тоже должно плавно двигаться
                    style={{
                        padding: '10px 14px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >

                    {/* ВЕРХНИЙ УРОВЕНЬ (Bar) */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: isMobile ? '0' : '40px'
                    }}>

                        {/* ЛОГОТИП */}
                        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 4 }}>
                            <div style={{
                                width: 36, height: 36,
                                background: '#1e293b', // Темный фон кружка
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}>
                                {/* --- 4. FIX ЦВЕТА ИКОНКИ --- */}
                                {/* filter: brightness(100) делает png белым, если фон темный. 
                                    Если хочешь темную иконку на белом - убери filter или сделай brightness(0) */}
                                <img
                                    src="/botcamp_logo.png"
                                    alt="BotCamp"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        objectFit: 'contain',
                                        // Если лого цветное/зеленое, этот фильтр сделает его чисто белым для контраста на черном кружке
                                        filter: 'brightness(0) invert(1)'
                                    }}
                                />
                            </div>
                            <span style={{
                                fontWeight: 800,
                                fontSize: '1.1rem',
                                color: '#0f172a',
                                letterSpacing: '-0.02em',
                                fontFamily: '"Plus Jakarta Sans", sans-serif'
                            }}>
                                BotCamp
                            </span>
                        </a>

                        {/* DESKTOP NAV */}
                        {!isMobile && (
                            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                {['Продукт', 'Решения', 'Цены', 'Документация'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        style={{
                                            textDecoration: 'none',
                                            color: '#64748b',
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            transition: 'color 0.2s',
                                            position: 'relative'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = '#0f172a'}
                                        onMouseLeave={(e) => e.target.style.color = '#64748b'}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        )}

                        {/* RIGHT ACTIONS */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: '#0f172a',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '100px',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    display: isMobile ? 'none' : 'flex',
                                    alignItems: 'center',
                                    gap: 6
                                }}
                            >
                                Личный кабинет <ArrowRight size={14} />
                            </motion.button>

                            {/* Mobile Toggle Button */}
                            <div
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                style={{
                                    width: 40, height: 40,
                                    borderRadius: '50%',
                                    background: mobileMenuOpen ? '#e2e8f0' : 'transparent',
                                    display: isMobile ? 'flex' : 'none',
                                    alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s'
                                }}
                            >
                                <AnimatePresence mode='wait'>
                                    {mobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X size={20} color="#0f172a" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu size={20} color="#0f172a" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE EXPANDABLE MENU (Dynamic Island Expansion) */}
                    <AnimatePresence>
                        {isMobile && mobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                                style={{ width: '100%', overflow: 'hidden' }}
                            >
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    style={{
                                        paddingTop: 20,
                                        paddingBottom: 5,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 6
                                    }}
                                >
                                    {['Product', 'Solutions', 'Pricing', 'Docs'].map((item, i) => (
                                        <motion.a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            style={{
                                                padding: '14px 16px',
                                                borderRadius: '20px',
                                                textDecoration: 'none',
                                                color: '#0f172a',
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                background: '#f1f5f9', // Легкий серый фон для ссылок
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {item}
                                        </motion.a>
                                    ))}

                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        style={{
                                            marginTop: 8,
                                            width: '100%',
                                            padding: '16px',
                                            borderRadius: '24px',
                                            background: '#0f172a', // Акцентная черная кнопка
                                            color: 'white',
                                            border: 'none',
                                            fontWeight: 700,
                                            fontSize: '1rem',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: 8,
                                            boxShadow: '0 4px 15px rgba(15, 23, 42, 0.3)'
                                        }}
                                    >
                                        Личный кабинет <ArrowRight size={18} />
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.header>
        </AnimatePresence>
    );
};

export default Header;