import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'shared-components/input';
import { Button } from 'shared-components/button';
import { TComment, TInputValue, TProps } from './types';
import { commentYupScheme } from './validation-comment';
import styles from './add-comments.module.scss';
import { useLanguage } from '../../hooks/use-language';

export const AddComments = ({
  onSubmit,
  isShowError = false,
  isLoading = false,
}: TProps) => {
  const { translation } = useLanguage();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
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
            label={translation('enterCommentText')}
            value={value || ''}
            onChange={onChange}
            error={isShowError ? errors.comment?.message : undefined}
            color="secondary"
            className={styles.input}
            placeholder={translation('writeMessage')}
            variant="outline"
          />
        )}
        name="comment"
      />
      <div>
        <Button
          color="secondary"
          type="submit"
          className={styles.button}
          disabled={isLoading || !isValid}
        >
          {translation('send')}
        </Button>
      </div>
    </form>
  );
};
