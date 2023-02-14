import { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cn from 'classnames';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import styles from './list-box.module.scss';
import { TProps } from './types';
import { Button } from '../button';

export const ListBox = ({
  items,
  className,
  value,
  defaultValue,
  onChange,
  disabled,
  size,
  color = 'secondary',
}: TProps) => {
  if (!items?.length) {
    return null;
  }

  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
    [styles[`color-${size}`]]: Boolean(size),
  };

  return (
    <HListBox
      as="div"
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={cn(styles.listBox, className)}
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
          {value || defaultValue}
          <ChevronUpDownIcon width={20} height={20} className={styles.icon} />
        </Button>
      </HListBox.Button>
      <HListBox.Options className={cn(styles.options, classes)}>
        {items.map((item) => (
          <HListBox.Option
            key={item.value}
            disabled={item.disabled}
            value={item.value}
            as={Fragment}
          >
            {({ selected }) => (
              <li
                className={cn(
                  { [styles.selected]: selected },
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
  );
};
