import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Server, DollarSign, Send, HelpCircle } from 'lucide-react';

const navItems = [
    { id: 'hero', icon: Home },
    { id: 'features', icon: Server },
    { id: 'pricing', icon: DollarSign },
    { id: 'contact', icon: Send },
    { id: 'faq', icon: HelpCircle },
];

const StickyLiquidNav = () => {
    const [activeId, setActiveId] = useState('hero');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1100);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollCenter = window.scrollY + window.innerHeight * 0.3;

                    for (const item of navItems) {
                        const section = document.getElementById(item.id);
                        if (section) {
                            const { offsetTop, offsetHeight } = section;
                            if (scrollCenter >= offsetTop && scrollCenter < offsetTop + offsetHeight) {
                                setActiveId(item.id);
                                break;
                            }
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (id) => {
        setActiveId(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Анимация контейнера (появление)
    const containerVars = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    // Анимация иконок
    const itemVars = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        /* ВНЕШНИЙ КОНТЕЙНЕР (Обычный div)
           Держит позицию fixed и CSS-центровку. Не анимируем его, чтобы не сбить transform.
        */
        <div className={`liquid-nav-wrapper ${isMobile ? 'mobile' : 'desktop'}`}>

            {/* ВНУТРЕННИЙ КОНТЕЙНЕР (Motion)
               Анимируем прозрачность и масштаб внутри зафиксированного блока.
            */}
            <motion.div
                className="clean-nav-container"
                initial="hidden"
                animate="visible"
                variants={containerVars}
            >

                {/* 1. БЕЛАЯ ПОДЛОЖКА (ФОН) */}
                <div className="nav-background" />

                {/* 2. СЛОЙ ИКОНОК И ШАРИКА */}
                <div className="icons-layer">
                    {navItems.map((item) => {
                        const isActive = activeId === item.id;

                        return (
                            <motion.div
                                key={item.id}
                                className="nav-item-wrapper"
                                onClick={() => handleClick(item.id)}
                                variants={itemVars}
                            >
                                {/* ЧЕРНЫЙ ШАРИК (BLOB) */}
                                {isActive && (
                                    <motion.div
                                        layoutId="clean-blob"
                                        className="clean-blob"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                            mass: 0.8
                                        }}
                                    />
                                )}

                                {/* ИКОНКА */}
                                <div className={`icon-box ${isActive ? 'active' : ''}`}>
                                    <item.icon size={22} strokeWidth={isActive ? 3 : 2} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default StickyLiquidNav;