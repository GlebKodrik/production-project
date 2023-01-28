import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'shared-components/input';
import { useSelector } from 'react-redux';
import { TInputValue, TProps } from './types';
import { commentYupScheme } from './validation-comment';
import { commentActions, getComment } from './stores/comment';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { DynamicModuleLoader } from '../../redux-stores/components/dynamic-module-loader';

export const AddComments = ({
  onSubmit,
}: TProps) => {
  const comment = useSelector(getComment);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TInputValue>({
    resolver: yupResolver(commentYupScheme()),
    mode: 'onChange',
    defaultValues: {
      comment,
    },
  });

  const onInputCommentChange = (value: string) => {
    setValue('comment', value);
    dispatch(commentActions.addComment(value));
  };

  return (
    <DynamicModuleLoader reducers={}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Введите текст комментария"
          name="comment"
          value={comment}
          onChange={onInputCommentChange}
          error={errors.comment?.message}
        />
      </form>
    </DynamicModuleLoader>

  );
};
