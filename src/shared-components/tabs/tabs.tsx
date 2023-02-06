import React from 'react';
import cn from 'classnames';
import { TProps } from './types';
import styles from './tabs.module.scss';
import { Button } from '../button';

export const Tabs = ({
  tabs,
  onClick,
  className,
  color = 'secondary',
  activeTab,
}: TProps) => {
  const onContentChange = (name: string) => () => {
    onClick(name);
  };

  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
  };

  const getIsActiveTab = (name: string) => activeTab === name;

  return (
    <>
      {tabs.map(({ name, content }) => (
        <Button
          onClick={onContentChange(name)}
          className={cn(
            styles.tab,
            classes,
            className,
            { [styles.activeTab]: getIsActiveTab(name) },
          )}
          key={name}
        >
          {content}
        </Button>
      ))}
    </>
  );
};
