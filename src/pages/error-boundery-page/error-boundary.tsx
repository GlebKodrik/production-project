import React, { Suspense } from 'react';
import Error from './components/error';
import Loader from '../../shared-components/loader';
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
        <Error error={error} />
      </Suspense>
    );
  }
}

export default ErrorBoundary;
