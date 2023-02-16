import { Placement, ReferenceType, Strategy } from '@floating-ui/react-dom';
import * as React from 'react';

export type TProps = {
  placement?: Placement,
  indent?: number
};

export type TReturn = {
  refs: {
    reference: React.MutableRefObject<ReferenceType | null>;
    floating: React.MutableRefObject<HTMLElement | null>;
    setReference: (node: ReferenceType | null) => void;
    setFloating: (node: HTMLElement | null) => void;
  },
  x: number | null,
  y: number | null,
  strategy: Strategy
};
