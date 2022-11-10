import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './input.module.scss';
import { TProps } from './types';

export const Input: React.FC<TProps> = ({
  type = 'text',
  inputRef,
  value,
  placeholder,
  onChange,
  className,
  ...otherProps
}) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      {
        placeholder && (
          <span className={styles.placeholder}>
            {`${placeholder}>`}
          </span>
        )
      }
      <input
        ref={inputRef}
        className={cn(styles.input)}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
};
