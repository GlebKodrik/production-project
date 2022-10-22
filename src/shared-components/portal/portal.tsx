import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TPortalProps } from './types';

const Portal: React.FC<TPortalProps> = ({ children }) => {
  const [element] = useState(() => document.getElementById('theme-app') || document.body);
  const [container] = useState(() => {
    const createdElement = document.createElement('div');
    createdElement.setAttribute('id', 'modal-root');
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
