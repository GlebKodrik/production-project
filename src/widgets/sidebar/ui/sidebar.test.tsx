import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';
import { componentRender } from '../../../shared/config/provider/componentRender';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

describe('Component Sidebar', () => {
  test('Sidebar in the document', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar open', () => {
    const { container } = componentRender(<Sidebar />);
    const toggleButton = container.querySelector('button[type="button"]');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
  });
});
