import React from 'react';
import { motion } from 'framer-motion';
import {
    Bot, Zap, BarChart2, Shield, Palette, Users,
    ArrowRight, CheckCircle2, Lock, Smartphone
} from 'lucide-react';

const features = [
    {
        id: 1,
        icon: <Bot size={32} />,
        title: 'Telegram-First',
        desc: 'Полное управление через бота. Клиент покупает подписку, получает ключи и инструкции не выходя из Telegram.',
        color: '#229ED9',
        span: 'col-span-1 md:col-span-2', // Широкая карточка
        delay: 0.1
    },
    {
        id: 2,
        icon: <Zap size={32} />,
        title: '5-Minute Launch',
        desc: 'Развертывание сервера в 1 клик. Без знания Linux и консоли.',
        color: '#f59e0b',
        span: 'col-span-1',
        delay: 0.2
    },
    {
        id: 3,
        icon: <Shield size={32} />,
        title: 'Cyber Security',
        desc: 'VLESS + Reality протоколы. Не детектируется цензорами.',
        color: '#10b981',
        span: 'col-span-1',
        delay: 0.3
    },
    {
        id: 4,
        icon: <BarChart2 size={32} />,
        title: 'Live Analytics',
        desc: 'Дашборд с доходами, активными юзерами и потреблением трафика в реальном времени.',
        color: '#8b5cf6',
        span: 'col-span-1 md:col-span-2', // Широкая карточка
        delay: 0.4
    },
    {
        id: 5,
        icon: <Palette size={32} />,
        title: 'White Label',
        desc: 'Ваш бренд, ваш логотип, ваши цены. Мы остаемся в тени.',
        color: '#ec4899',
        span: 'col-span-1',
        delay: 0.5
    }
];

const Features = () => {

    // Анимация контейнера (stagger effect)
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    // Анимация карточки (появление снизу)
    const cardVars = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    return (
        <section id="features" style={{ padding: '6rem 20px', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* ЗАГОЛОВОК СЕКЦИИ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '8px 16px', borderRadius: 100,
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        color: '#f59e0b', fontSize: '0.9rem', fontWeight: 600,
                        marginBottom: '1.5rem'
                    }}>
                        <Zap size={16} fill="#f59e0b" /> Why BotCamp?
                    </div>

                    <h2 style={{
                        fontSize: '3.5rem', fontWeight: 800,
                        lineHeight: 1.1, color: '#0f172a',
                        marginBottom: '1.5rem'
                    }}>
                        Everything you need <br />
                        <span style={{ color: 'transparent', WebkitTextStroke: '1px #0f172a' }}>to scale fast.</span>
                    </h2>

                    <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
                        Забудьте про сложные настройки серверов. Мы автоматизировали рутину,
                        чтобы вы могли сосредоточиться на маркетинге и прибыли.
                    </p>
                </motion.div>

                {/* BENTO GRID (АССИМЕТРИЧНАЯ СЕТКА) */}
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bento-grid"
                >
                    {features.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardVars}
                            className={`feature-card ${item.span}`}
                            whileHover={{ y: -5 }}
                        >
                            {/* Градиентный фон при наведении */}
                            <div className="hover-gradient" style={{ background: item.color }} />

                            <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="icon-wrapper" style={{ color: item.color, background: `${item.color}15` }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '20px 0 10px', color: '#0f172a' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '1rem' }}>
                                        {item.desc}
                                    </p>
                                </div>

                                <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 5, color: item.color, fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
                                    Learn more <ArrowRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA BLOCK (Встроенный в сетку) */}
                    <motion.div
                        variants={cardVars}
                        className="cta-box"
                        style={{ gridColumn: 'span 1', background: '#0f172a', color: 'white' }}
                    >
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: 15 }}>Готовы зарабатывать?</h3>
                            <p style={{ color: '#94a3b8', marginBottom: 25 }}>
                                Присоединяйтесь к более чем 500 предпринимателям, зарабатывающим на BotCamp.
                            </p>
                            <button style={{
                                width: '100%', padding: '14px', borderRadius: 12,
                                background: '#f59e0b', color: 'white', border: 'none',
                                fontWeight: 700, cursor: 'pointer', fontSize: '1rem'
                            }}>
                                Пробная версия
                            </button>
                        </div>
                        {/* Декор */}
                        <div style={{
                            position: 'absolute', top: -20, right: -20,
                            width: 100, height: 100, background: '#f59e0b',
                            borderRadius: '50%', filter: 'blur(60px)', opacity: 0.3
                        }} />
                    </motion.div>

                </motion.div>

            </div>

            {/* STYLES (INJECTED) */}
            <style jsx>{`
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                .feature-card {
                    background: white;
                    border-radius: 32px;
                    padding: 32px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: box-shadow 0.3s ease;
                    min-height: 280px;
                }

                .feature-card:hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                }

                .hover-gradient {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    mask-image: radial-gradient(circle at top right, black, transparent 70%);
                    pointer-events: none;
                }

                .feature-card:hover .hover-gradient {
                    opacity: 0.05;
                }

                .icon-wrapper {
                    width: 60px; height: 60px;
                    border-radius: 16px;
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 10px;
                }

                .col-span-1 { grid-column: span 1; }
                .md\\:col-span-2 { grid-column: span 2; }

                .cta-box {
                    border-radius: 32px;
                    padding: 32px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .bento-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .md\\:col-span-2 { grid-column: span 2; }
                }

                @media (max-width: 768px) {
                    .bento-grid {
                        grid-template-columns: 1fr;
                    }
                    .md\\:col-span-2 { grid-column: span 1; }
                    .feature-card { min-height: auto; }
                    h2 { font-size: 2.5rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Features;