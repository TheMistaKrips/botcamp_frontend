import React from 'react';
import { motion } from 'framer-motion';
import { Send, Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {

    // Анимация ссылок при наведении
    const linkHover = {
        rest: { x: 0 },
        hover: { x: 5, color: '#f59e0b' }
    };

    return (
        <footer style={{
            position: 'relative',
            background: '#0f172a',
            color: 'white',
            overflow: 'hidden',
            padding: '8rem 20px 2rem'
        }}>

            {/* ФОНОВАЯ СЕТКА И СВЕЧЕНИЕ */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                opacity: 0.5,
                zIndex: 0
            }} />

            <div style={{
                position: 'absolute', bottom: '-20%', left: '-10%',
                width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
                filter: 'blur(100px)', zIndex: 0
            }} />

            {/* ОСНОВНОЙ КОНТЕНТ */}
            <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* BIG TYPOGRAPHY CTA */}
                <div style={{ marginBottom: '6rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 8rem)', // Адаптивный размер
                            fontWeight: 900,
                            lineHeight: 0.9,
                            letterSpacing: '-0.04em',
                            margin: 0,
                            background: 'linear-gradient(to bottom, #fff, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        LET'S BUILD
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 8rem)',
                            fontWeight: 900,
                            lineHeight: 0.9,
                            letterSpacing: '-0.04em',
                            margin: 0,
                            display: 'flex', alignItems: 'center', gap: '20px',
                            color: '#f59e0b'
                        }}
                    >
                        THE FUTURE <ArrowUpRight size={'0.8em'} strokeWidth={3} />
                    </motion.h2>
                </div>

                {/* СЕТКА ССЫЛОК (GRID) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '4rem',
                    marginBottom: '4rem'
                }}>

                    {/* Колонка 1: О нас */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#f8fafc' }}>Платформа</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Особенности', 'Цены', 'Интеграции', 'Журнал изменений'].map((item) => (
                                <motion.a
                                    key={item} href="#"
                                    variants={linkHover} initial="rest" whileHover="hover"
                                    style={{ color: '#94a3b8', textDecoration: 'none', display: 'inline-block' }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Колонка 2: Ресурсы */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#f8fafc' }}>Ресурсы</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Документация', 'Ссылка на API', 'Сообщество', 'Справочный центр'].map((item) => (
                                <motion.a
                                    key={item} href="#"
                                    variants={linkHover} initial="rest" whileHover="hover"
                                    style={{ color: '#94a3b8', textDecoration: 'none', display: 'inline-block' }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Колонка 3: Компания */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#f8fafc' }}>Компания</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['О нас', 'Вакансии', 'Закон', 'Контакты'].map((item) => (
                                <motion.a
                                    key={item} href="#"
                                    variants={linkHover} initial="rest" whileHover="hover"
                                    style={{ color: '#94a3b8', textDecoration: 'none', display: 'inline-block' }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Колонка 4: Подписка (Newsletter) */}
                    <div style={{ minWidth: '280px' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#f8fafc' }}>Будьте в курсе событий</h4>
                        <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                            Получайте последние обновления и новости о нашей платформе.
                        </p>
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '12px',
                            padding: '6px',
                            display: 'flex',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    background: 'transparent', border: 'none', color: 'white',
                                    padding: '10px 15px', width: '100%', outline: 'none'
                                }}
                            />
                            <button style={{
                                background: '#f59e0b', border: 'none', borderRadius: '8px',
                                width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: 'white'
                            }}>
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px',
                    paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: 30, height: 30, background: 'white', borderRadius: '50%' }} />
                        <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>BotCamp</span>
                    </div>

                    <div style={{ color: '#64748b', fontSize: '0.9rem' }}>
                        © 2025 BotCamp Inc. All rights reserved.
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {[Twitter, Github, Linkedin].map((Icon, i) => (
                            <motion.a
                                key={i} href="#"
                                whileHover={{ y: -3, color: '#f59e0b' }}
                                style={{ color: '#94a3b8', cursor: 'pointer' }}
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;