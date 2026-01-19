import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Send, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleVpn = () => setIsConnected(!isConnected);

    // Определение мобильной версии для отключения тяжелого 3D
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const animVars = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="hero" className="hero-wrapper">

            {/* --- LEFT COLUMN (Desktop Only: Stats & Controls) --- 
                На мобилках мы часто скрываем левую колонку или переносим её вниз,
                чтобы сразу показать главный оффер.
            */}
            <div className="left-column">

                {/* 1. Telegram Connect */}
                <motion.div
                    className="stat-card tele-card"
                    variants={animVars}
                    initial="hidden"
                    animate="show"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="icon-circle-blue">
                        <Send size={24} color="white" />
                    </div>
                    <div>
                        <h3>Start Bot</h3>
                        <p>@banditvpn_bot</p>
                    </div>
                    <button className="tele-btn" onClick={() => window.open('https://t.me', '_blank')}>
                        Open <ArrowRight size={16} />
                    </button>
                </motion.div>

                {/* 2. System Status */}
                <motion.div
                    className="stat-card"
                    variants={animVars}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.1 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
                        <span style={{ fontWeight: 600, color: '#94a3b8', fontSize: '0.85rem' }}>Статус</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.9rem', fontWeight: 700, color: isConnected ? '#10b981' : '#64748b' }}>
                            <div className={`status-dot ${isConnected ? 'online' : ''}`}></div>
                            {isConnected ? 'Защищен' : 'Отключен'}
                        </div>
                    </div>
                    <div className="meter-bg">
                        <motion.div
                            className="meter-fill"
                            animate={{ width: isConnected ? '100%' : '5%' }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </motion.div>

                {/* 3. Quick Action */}
                <motion.div
                    className="stat-card orange-card"
                    variants={animVars}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.2 }}
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <span>Премиум функции</span>
                    <ArrowRight size={24} />
                </motion.div>
            </div>

            {/* --- CENTER: MAIN STAGE --- */}
            <motion.div
                className="main-stage-asymmetric"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* 3D Scene / Mobile Alternative 
                    Если это мобилка -> показываем легкую CSS анимацию (Градиентные шары)
                    Если десктоп -> показываем Spline
                */}
                <div className="spline-full">
                    {isMobile ? (
                        /* MOBILE ABSTRACT ART REPLACEMENT */
                        <div style={{
                            width: '100%', height: '100%',
                            position: 'relative', overflow: 'hidden',
                            background: 'radial-gradient(circle at 50% 120%, #1e293b 0%, #0f172a 100%)'
                        }}>
                            {/* Анимированный шар 1 (Оранжевый акцент) */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.4, 0.6, 0.4]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    top: '20%', right: '-10%',
                                    width: '300px', height: '300px',
                                    background: 'radial-gradient(circle, rgba(245,158,11,0.4) 0%, rgba(0,0,0,0) 70%)',
                                    borderRadius: '50%',
                                    filter: 'blur(40px)'
                                }}
                            />
                            {/* Анимированный шар 2 (Синий акцент) */}
                            <motion.div
                                animate={{
                                    x: [0, 30, 0],
                                    y: [0, -30, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    bottom: '-10%', left: '-10%',
                                    width: '350px', height: '350px',
                                    background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(0,0,0,0) 70%)',
                                    borderRadius: '50%',
                                    filter: 'blur(50px)'
                                }}
                            />
                            {/* Сетка на фоне для технологичности */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                                maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                            }} />
                        </div>
                    ) : (
                        /* DESKTOP 3D SCENE */
                        <Spline scene="https://prod.spline.design/Z0kDvfQg5si07leT/scene.splinecode" />
                    )}
                </div>

                {/* Clean Overlay UI */}
                <div className="hero-overlay">
                    <div>
                        <h1 className="hero-clean-title">
                            Создайте Свою<br />
                            <span style={{ color: '#f59e0b' }}>Цифровую крепость</span>
                        </h1>
                        <p className="hero-clean-desc">
                            Запустите свой VPN-бизнес за 5 минут с помощью Telegram.
                            Мы занимаемся серверами, выставлением счетов и ключами. Вы получаете прибыль.
                        </p>
                    </div>

                    {/* Interactive Button */}
                    <div className="action-corner">
                        <button className={`fab-btn ${isConnected ? 'active' : ''}`} onClick={toggleVpn}>
                            {isConnected ? <ShieldCheck size={32} /> : <Zap size={32} fill="white" />}
                        </button>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;