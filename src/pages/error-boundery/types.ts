import { ReactNode } from 'react';

export type TErrorBoundaryProps = {
  children: ReactNode;
};

export type TErrorBoundaryStateProps = {
  error: Error | null;
};
