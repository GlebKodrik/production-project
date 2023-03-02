import React from 'react';
import Error from './components/error';
import { TErrorBoundaryProps, TErrorBoundaryStateProps } from './types';

class ErrorBoundaryPage extends React.Component<TErrorBoundaryProps, TErrorBoundaryStateProps> {
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
      <Error error={error} />
    );
  }
}

export default ErrorBoundaryPage;
