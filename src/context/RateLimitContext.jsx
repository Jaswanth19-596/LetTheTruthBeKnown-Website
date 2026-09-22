/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { checkLimit, registerAction } from '../utils/rateLimiter';
import RateLimitModal from '../components/RateLimitModal';


const RateLimitContext = createContext(null);

export const RateLimitProvider = ({ children }) => {
  const [modalState, setModalState] = useState({ isOpen: false, timeToWaitMs: 0 });

  const checkAndRegister = (action) => {
    const status = checkLimit(action);
    if (!status.allowed) {
      if (action === 'pdf_download') {
        setModalState({ isOpen: true, timeToWaitMs: status.timeToWaitMs });
      }
      return false;
    }
    registerAction(action);
    return true;
  };

  const closeModal = () => {
    setModalState({ isOpen: false, timeToWaitMs: 0 });
  };

  return (
    <RateLimitContext.Provider value={{ checkAndRegister, modalState, closeModal }}>
      {children}
      {modalState.isOpen && (
        <RateLimitModal timeToWaitMs={modalState.timeToWaitMs} onClose={closeModal} />
      )}
    </RateLimitContext.Provider>
  );
};

export const useRateLimit = () => {
  const context = useContext(RateLimitContext);
  if (!context) {
    throw new Error('useRateLimit must be used within a RateLimitProvider');
  }
  return context;
};
