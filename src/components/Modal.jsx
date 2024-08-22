import React, { useEffect } from 'react';

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

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Croix de fermeture visible uniquement sur mobile */}
        <button
          onClick={onClose}
          className=" sm:hidden absolute top-2 right-2 text-gray hover:text-gray text-xl font-bold"
        >
          &times;
        </button>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;