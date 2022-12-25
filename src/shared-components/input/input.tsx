import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './input.module.scss';
import { TProps } from './types';

export const Input = React.memo(({
  type = 'text',
  inputRef,
  tabIndex,
  value,
  placeholder,
  onChange,
  className,
  ...otherProps
}: TProps) => {
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
        tabIndex={tabIndex}
        className={cn(styles.input)}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
