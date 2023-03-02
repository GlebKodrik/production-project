import React from 'react';
import { componentRender } from 'providers/component-render';
import { Sidebar } from './sidebar';

describe('Snapshots of Sidebar component', () => {
  test('Snapshots of Sidebar component', () => {
    const { asFragment } = componentRender({ component: <Sidebar /> });
    expect(asFragment()).toMatchSnapshot();
  });
});
