import React from 'react';
import { Menu } from '@headlessui/react';
import cn from 'classnames';
import {
  autoUpdate,
  flip, offset, shift, useFloating,
} from '@floating-ui/react';
import { TProps } from './types';
import styles from './drop-down.module.scss';
import { Link } from '../link';

export const DropDown = ({
  className,
  trigger,
  items,
}: TProps) => {
  const {
    x, y, strategy, refs,
  } = useFloating({
    placement: 'bottom-end',
    middleware: [
      offset(2),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });
  const renderContent = ({ content, href }: any) => {
    if (href) {
      return (
        <Link to={href}>
          {content}
        </Link>
      );
    }

    return content;
  };

  return (
    <Menu className={cn(styles.wrapper, className)} as="div">
      <Menu.Button className={styles.trigger} ref={refs.setReference}>
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={styles.items}
        as="ul"
        ref={refs.setFloating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
          width: 'max-content',
        }}
      >
        {items.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <li>
                <div
                  onClick={item.onClick}
                  onKeyDown={item.onClick}
                  className={cn(styles.item, { [styles.active]: active }, styles.div)}
                >
                  {renderContent({ content: item.content, href: item.href })}
                </div>
              </li>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
