import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Component Select', () => {
  test('Select children render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText(/TEST/)).toBeInTheDocument();
  });
});
