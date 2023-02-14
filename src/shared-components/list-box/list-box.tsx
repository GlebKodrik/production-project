import React, { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cn from 'classnames';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import styles from './list-box.module.scss';
import { TProps } from './types';
import { Button } from '../button';
import { Label } from '../label';

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

  const currentContent = items.find((item) => item.value === value);

  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
    [styles[`color-${size}`]]: Boolean(size),
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <Label label={label} className={styles.label} />
      <HListBox
        as="div"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(styles.listBox)}
      >
        <HListBox.Button as="div">
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
        <HListBox.Options
          className={cn(styles.options, classes)}
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
      </HListBox>
    </div>
  );
};
