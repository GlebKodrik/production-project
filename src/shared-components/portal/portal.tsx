import React, {
  useEffect, useRef, useState,
} from 'react';
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
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null) as React.MutableRefObject<any>;

  useEffect(() => {
    const element = propElement || document.querySelector('#portal-app') || document.body;
    ref.current = element;
    element.appendChild(container);
    setMounted(true);

    return () => {
      element.removeChild(container);
    };
  }, []);

  return mounted && ref.current ? ReactDOM.createPortal(children, container) : null;
};

export default Portal;
