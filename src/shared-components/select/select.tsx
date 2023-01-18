import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './select.module.scss';
import { TSelectProps } from './types';

export const Select = React.memo((
  {
    placeholder,
    className,
    isReadOnly,
    options,
    value,
    onChange,
    name,
  }: TSelectProps,
) => {
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <div className={cn(styles.wrapper, className)}>
      {
        placeholder && (
          <div className={styles.placeholder}>
              {`${placeholder}>`}
          </div>
        )
      }
      <select
        disabled={isReadOnly}
        className={styles.select}
        value={value}
        onChange={onSelectChange}
        name={name}
      >
        {options.map((item) => (
          <option
            className={styles.option}
            value={item.value}
            key={item.value}
          >
            {item.content}
          </option>
        ))}
      </select>
    </div>
  );
});
