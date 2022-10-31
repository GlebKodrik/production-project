import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TPortalProps } from './types';

const Portal: React.FC<TPortalProps> = ({
  children,
  propElement,
  propIdNameElement = 'modal',
}) => {
  const [container] = useState(() => {
    const createdElement = document.createElement('div');
    createdElement.setAttribute('id', propIdNameElement);
    return createdElement;
  });

  useEffect(() => {
    const element = propElement || document.querySelector('#portal-app') || document.body;
    element.appendChild(container);

    return () => {
      element.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
