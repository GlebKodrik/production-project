import React from 'react';

import cls from 'classnames';
import { TModalProps } from './types';
import styles from './modal.module.scss';

const Modal: React.FC<TModalProps> = ({
  className,
  children,
  open,
  onClose,
}) => {
  const onCloseModal = () => {
    onClose(false);
  };

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={cls(styles.modal, { [styles.opened]: open }, className)}>
      <div className={cls(styles.overlay)} onClick={onCloseModal}>
        <div className={cls(styles.content)} onClick={onContentClick}>
          { children }
        </div>
      </div>
    </div>
  );
};

export default Modal;
