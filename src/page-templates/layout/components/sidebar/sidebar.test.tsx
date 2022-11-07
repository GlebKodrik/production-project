import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';
import { componentRender } from '../../../../providers/component-render';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

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

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
  });
});
