import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './select.module.scss';
import { TSelectProps } from './types';
import { Typography } from '../typography';

export const Select = React.memo((
  {
    label,
    className,
    options,
    value,
    onChange,
    name,
    disabled,
    color = 'secondary',
  }: TSelectProps,
) => {
  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
  };

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const renderLabel = () => label && (
  <Typography tag="span" className={styles.label}>
    {`${label}>`}
  </Typography>
  );

  const renderOptions = () => options.map((item) => (
    <option
      className={styles.option}
      value={item.value}
      key={item.value}
    >
      {item.content}
    </option>
  ));

  return (
    <div className={cn(styles.wrapper, className)}>
      {renderLabel()}
      <select
        disabled={disabled}
        className={cn(styles.select, classes)}
        value={value}
        onChange={onSelectChange}
        name={name}
      >
        {renderOptions()}
      </select>
    </div>
  );
});
