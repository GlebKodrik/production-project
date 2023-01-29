import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'shared-components/input';
import { Button } from 'shared-components/button';
import { TComment, TInputValue, TProps } from './types';
import { commentYupScheme } from './validation-comment';
import styles from './add-comments.module.scss';

export const AddComments = ({
  onSubmit,
}: TProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInputValue>({
    resolver: yupResolver(commentYupScheme()),
    mode: 'onChange',
    defaultValues: {
      comment: '',
    },
  });
  const onSubmitForm = ({ comment }: TComment) => {
    onSubmit(comment, { reset });
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className={styles.wrapper}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Введите текст комментария"
            value={value || ''}
            onChange={onChange}
            error={errors.comment?.message}
            color="secondary"
            className={styles.input}
            variant="outline"
          />
        )}
        name="comment"
      />
      <div>
        <Button color="secondary" type="submit" className={styles.button}>Отправить</Button>
      </div>
    </form>
  );
};
