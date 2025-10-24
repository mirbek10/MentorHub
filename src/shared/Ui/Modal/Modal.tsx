import React from 'react';
import './Modal.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
    btn?: boolean
    onConfirm?: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, className, btn, onConfirm  }) => {
    if (!isOpen) return null;
    if (btn === undefined) btn = true

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className={`modal-content ${className}`} onClick={(e) => e.stopPropagation()}>
                
            {children}
            {
                btn &&
                <div className="modal-down-buttons">
                    <button onClick={onClose}>Закрыть</button>
                    <button onClick={onConfirm}>{title}</button>
                </div>
            }
                {/* <div className="modal-down-buttons">
                    <button onClick={onClose}>Закрыть</button>
                    <button>{title}</button>
                </div> */}
            </div>
        </div>
    );
};

export default Modal;