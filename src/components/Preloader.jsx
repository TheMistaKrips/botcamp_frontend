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
            <div style={{ position: 'relative', width: 80, height: 80 }}>
                {/* Вращающееся кольцо */}
                <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    style={{
                        display: 'block', width: '100%', height: '100%',
                        borderRadius: '50%',
                        border: '4px solid rgba(255,255,255,0.1)',
                        borderTopColor: '#f59e0b'
                    }}
                />

                {/* Логотип в центре */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontWeight: 800, color: 'white', fontSize: '1.2rem'
                }}>
                    B.
                </div>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ marginTop: 20, color: '#94a3b8', fontSize: '0.9rem', letterSpacing: '2px' }}
            >
                LOADING EXPERIENCE
            </motion.p>
        </motion.div>
    );
};

export default Preloader;