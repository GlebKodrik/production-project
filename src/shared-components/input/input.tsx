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
  error,
  name,
  ...otherProps
}: TProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
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
      <div>
        <input
          ref={inputRef}
          tabIndex={tabIndex}
          className={cn(styles.input, { [styles.inputError]: Boolean(error) })}
          type={type}
          value={value}
          onChange={onChangeHandler}
          name={name}
          {...otherProps}
        />
      </div>
    </div>
  );
});
