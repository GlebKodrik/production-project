import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'providers/component-render';
import { Sidebar } from './sidebar';

describe('Component Sidebar', () => {
  test('Sidebar in the document', () => {
    componentRender({ component: <Sidebar /> });
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar open', () => {
    const { container } = componentRender({
      component: <Sidebar />,
    });
    const toggleButton = container.querySelector('button[type="button"]');

    if (toggleButton) {
      fireEvent.click(toggleButton);
    }

    expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
  });
});
