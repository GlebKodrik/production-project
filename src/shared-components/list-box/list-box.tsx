import React, { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cn from 'classnames';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import styles from './list-box.module.scss';
import { TProps } from './types';
import { Button } from '../button';
import { Label } from '../label';
import { useFloating } from '../../hooks/use-floating';
import Portal from '../portal';

export const ListBox = ({
  items,
  className,
  value,
  defaultValue,
  onChange,
  disabled,
  size = 'small',
  label,
  color = 'secondary',
}: TProps) => {
  if (!items?.length) {
    return null;
  }

  const {
    x, y, strategy, refs,
  } = useFloating({ placement: 'bottom' });
  const currentContent = items.find((item) => item.value === value);

  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
    [styles[`color-${size}`]]: Boolean(size),
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <Label label={label} className={styles.label} />
      <HListBox
        horizontal
        as="div"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(styles.listBox)}
      >
        <HListBox.Button ref={refs.setReference} as="div">
          <Button
            variant="outline"
            size={size}
            className={cn(
              styles.button,
              { [styles.disabled]: disabled },
            )}
          >
            {currentContent?.content || defaultValue}
            <ChevronUpDownIcon width={20} height={20} className={styles.icon} />
          </Button>
        </HListBox.Button>
        <Portal idElement="list-box">
          <HListBox.Options
            className={cn(styles.options, classes)}
            as="ul"
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              width: 'max-content',
            }}
          >
            {items.map((item) => (
              <HListBox.Option
                key={item.value}
                disabled={item.disabled}
                value={item.value}
                as={Fragment}
              >
                {({ active }) => (
                  <li
                    className={cn(
                      { [styles.selected]: active },
                      { [styles.disabled]: item.disabled },
                      styles.item,
                    )}
                  >
                    {item.content}
                  </li>
                )}
              </HListBox.Option>
            ))}
          </HListBox.Options>
        </Portal>
      </HListBox>
    </div>
  );
};
