import { useEffect } from 'react';

const Modal = ({ showModal, onClose, title, children }) => {
    const handleEscKey = (e) => {
        if (e.key === 'Escape') onClose();
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);

    if (!showModal) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-xl w-full max-w-3xl h-[80vh] overflow-hidden relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold transition"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                <div className="p-6 overflow-auto flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
