import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import cls from 'classnames';
import { TModalProps } from './types';
import styles from './modal.module.scss';
import Portal from '../portal';

const ANIMATION_TIMEOUT = 300;

const Modal: React.FC<TModalProps> = ({
  className,
  children,
  open,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const onCloseModal = () => {
    setIsClosing(true);
    timeoutRef.current = setTimeout(() => {
      setIsClosing(false);
      onClose(false);
    }, ANIMATION_TIMEOUT);
  };

  const onKeyDownHandler = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onCloseModal();
    }
  }, []);

  const onContentClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', onKeyDownHandler);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
      clearTimeout(timeoutRef.current);
    };
  }, [open]);

  return (
    <Portal>
      <div className={cls(
        styles.modal,
        { [styles.opened]: open, [styles.closing]: isClosing },
        className,
      )}
      >
        <div className={cls(styles.overlay)} onClick={onCloseModal}>
          <div className={cls(styles.content)} onClick={onContentClick}>
            { children }
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
