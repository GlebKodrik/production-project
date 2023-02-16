import React from 'react';
import { Menu } from '@headlessui/react';
import cn from 'classnames';
import { TProps } from './types';
import styles from './drop-down.module.scss';
import { Link } from '../link';

export const DropDown = ({
  className,
  trigger,
  items,
}: TProps) => {
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
      <Menu.Button className={styles.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={styles.items} as="ul">
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
