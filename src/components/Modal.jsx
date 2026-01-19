import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const modalStyle = {
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        borderRadius: '16px',
        padding: '2rem',
        maxWidth: '500px',
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative'
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'none',
        border: 'none',
        color: 'var(--gray)',
        fontSize: '1.5rem',
        cursor: 'pointer'
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div style={modalStyle} onClick={e => e.stopPropagation()}>
                <button style={closeButtonStyle} onClick={onClose}>×</button>
                {title && (
                    <h2 style={{
                        marginBottom: '1.5rem',
                        color: 'white'
                    }}>
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </div>
    );
};

export default Modal;