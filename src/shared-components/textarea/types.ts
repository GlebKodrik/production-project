import React, { TextareaHTMLAttributes } from 'react';

export type TProps = {
  className?: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  error?: boolean
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
