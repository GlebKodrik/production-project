import { Story } from '@storybook/react';
import { Provider } from 'react-redux';
import { rootStore } from '../../redux/root-store';

export const ReduxProvider = (StoryComponent: Story) => (
  <Provider store={rootStore}>
    <StoryComponent />
  </Provider>
);
