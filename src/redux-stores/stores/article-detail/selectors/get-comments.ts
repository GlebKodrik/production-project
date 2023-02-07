import { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getComments = (state: TReduxStateScheme) => state.articleDetail?.article?.comments.data;
export const getCommentsIsLoading = (state: TReduxStateScheme) => state.articleDetail?.article?.comments.isLoading;
export const getCommentsIsFinish = (state: TReduxStateScheme) => state.articleDetail?.article?.comments.isFinish;
