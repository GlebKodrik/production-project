import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TPortalProps } from './types';

const Portal: React.FC<TPortalProps> = ({
  children,
  element = document.body,
  idName = 'modal',
}) => {
  const [container] = useState(() => {
    const createdElement = document.createElement('div');
    createdElement.setAttribute('id', `portal-${idName}`);
    return createdElement;
  });

  useEffect(() => {
    element.appendChild(container);

    return () => {
      element.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
