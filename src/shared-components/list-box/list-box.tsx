import { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cn from 'classnames';
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
}: TProps) => {
  if (!items?.length) {
    return null;
  }

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
            { [styles.disabled]: disabled },
          )}
        >
          {value || defaultValue}
        </Button>
      </HListBox.Button>
      <HListBox.Options className={styles.options}>
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
                  { [styles.active]: active },
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
