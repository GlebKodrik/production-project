import React, { Fragment } from 'react';
import { Menu } from '@headlessui/react';
import cn from 'classnames';
import { useFloating } from 'hooks/use-floating';
import { TDropDownItem, TProps } from './types';
import styles from './drop-down.module.scss';
import { Link } from '../link';
import Portal from '../portal';
import { Button } from '../button';

export const DropDown = ({
  className,
  trigger,
  items,
}: TProps) => {
  const {
    refs, y, strategy, x,
  } = useFloating({});
  const renderContent = ({ content, href }: TDropDownItem) => {
    if (href) {
      return (
        <Link to={href} className={styles.item}>
          {content}
        </Link>
      );
    }

    return (
      <Button className={styles.item}>
        {content}
      </Button>
    );
  };

  return (
    <Menu className={cn(styles.wrapper, className)} as="div">
      <Menu.Button className={styles.trigger} ref={refs.setReference}>
        {trigger}
      </Menu.Button>
      <Portal idElement="drop-down">
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
            <Menu.Item key={index} as={Fragment}>
              {({ active }) => (
                <li
                  onClick={item.onClick}
                  onKeyDown={item.onClick}
                  className={cn({ [styles.active]: active }, styles.div)}
                >
                  {renderContent({ content: item.content, href: item.href })}
                </li>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Portal>
    </Menu>
  );
};
