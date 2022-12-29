import { Story } from '@storybook/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@stores/root-store';

export const ReduxDecorator = (StoryComponent: Story) => {
  const rootStore = createReduxStore({});
  return (
    <Provider store={rootStore}>
      <StoryComponent />
    </Provider>
  );
};
