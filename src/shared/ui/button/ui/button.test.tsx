import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Component Button', () => {
  test('Button children render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText(/TEST/)).toBeInTheDocument();
  });
});
