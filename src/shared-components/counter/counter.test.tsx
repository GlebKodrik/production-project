import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '../../providers/component-render';
import Counter from './counter';

describe('Test component comment', () => {
  test('Test default count', () => {
    componentRender({
      component: <Counter />,
      initialState: {
        counter: {
          count: 10,
        },
      },
    });
    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });
  test('Test click increment & decrement', () => {
    componentRender({
      component: <Counter />,
      initialState: {
        counter: {
          count: 10,
        },
      },
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('count')).toHaveTextContent('11');
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });
});
