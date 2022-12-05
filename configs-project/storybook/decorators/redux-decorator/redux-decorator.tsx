import { Story } from '@storybook/react';
import { Provider } from 'react-redux';
import { rootStore } from '@stores/root-store';

export const ReduxDecorator = (StoryComponent: Story) => (
  <Provider store={rootStore}>
    <StoryComponent />
  </Provider>
);
