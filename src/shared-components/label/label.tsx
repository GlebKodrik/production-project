import React from 'react';
import { TProps } from './types';
import { Typography } from '../typography';

export const Label = ({ label, className }: TProps) => {
  if (!label) {
    return null;
  }

  return (
    <Typography tag="span" className={className}>
      {`${label}>`}
    </Typography>
  );
};
