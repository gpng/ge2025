'use client';

import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

interface QnaWidgetContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const QnaWidgetContext = createContext<QnaWidgetContextType | undefined>(
  undefined,
);

interface Props {
  children: ReactNode;
}

export function QnaWidgetProvider({ children }: Props) {
  const [isOpen, setIsOpenState] = useState(false);

  const setIsOpen = useCallback((open: boolean) => {
    setIsOpenState(open);
  }, []);

  return (
    <QnaWidgetContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </QnaWidgetContext.Provider>
  );
}

export function useQnaWidget() {
  const context = useContext(QnaWidgetContext);
  if (context === undefined) {
    throw new Error('useQnaWidget must be used within a QnaWidgetProvider');
  }
  return context;
}
