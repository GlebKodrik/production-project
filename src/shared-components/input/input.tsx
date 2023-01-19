import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './input.module.scss';
import { TInputProps } from './types';

export const Input = React.memo(({
  type = 'text',
  inputRef,
  tabIndex,
  value,
  placeholder,
  onChange,
  className,
  error,
  size = 'medium',
  color = 'primary',
  name,
  disabled,
  variant = 'plain',
  ...otherProps
}: TInputProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const classes = {
    [styles[`variant-${variant}`]]: Boolean(variant),
    [styles[`color-${color}`]]: Boolean(color),
    [styles[`size-${size}`]]: Boolean(size),
  };

  const renderPlaceholder = () => placeholder && (
  <div className={styles.placeholder}>
    {`${placeholder}>`}
  </div>
  );

  const renderError = () => error && <div className={styles.errorMessage}>{error}</div>;

  return (
    <div className={cn(styles.wrapper, className)}>
      {renderPlaceholder()}
      <div>
        <input
          ref={inputRef}
          tabIndex={tabIndex}
          className={cn(styles.input, classes, { [styles.inputError]: Boolean(error) })}
          type={type}
          value={value}
          onChange={onChangeHandler}
          name={name}
          disabled={disabled}
          {...otherProps}
        />
        {renderError()}
      </div>
    </div>
  );
});
