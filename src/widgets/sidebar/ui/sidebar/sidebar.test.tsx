import { render, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';

describe('Component Button', () => {
  test('Button children render', () => {
    render(<Sidebar />);
  });
});
