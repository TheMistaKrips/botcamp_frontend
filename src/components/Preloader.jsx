import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#0f172a',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <div style={{
                position: 'relative',
                width: 160,
                height: 160,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Минимальное вращающееся кольцо */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.8,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.1)',
                        borderTop: '2px solidrgb(255, 255, 255)',
                        borderRight: '2px solid rgba(255, 255, 255, 0.5)'
                    }}
                />

                {/* Внутреннее кольцо */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 2.2,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        width: '70%',
                        height: '70%',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                        borderLeft: '1px solid hsla(0, 0.00%, 100.00%, 0.20)'
                    }}
                />

                {/* Логотип по центру */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    style={{
                        width: '80px',
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src="/botcamp_logo.png"
                        alt="BotCamp Logo"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)',
                            opacity: 0.9
                        }}
                    />
                </motion.div>
            </div>

        </motion.div>
    );
};

export default Preloader;