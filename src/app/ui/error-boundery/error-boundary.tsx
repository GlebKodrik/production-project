import React, { Suspense } from 'react';
import PageError from '../../../pages/error-page';
import Loader from '../../../shared/ui/loader';
import { TErrorBoundaryProps, TErrorBoundaryStateProps } from './types';

class ErrorBoundary extends React.Component<TErrorBoundaryProps, TErrorBoundaryStateProps> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (!error) {
      return children;
    }

    return (
      <Suspense fallback={Loader}>
        <PageError />
      </Suspense>
    );
  }
}

export default ErrorBoundary;
