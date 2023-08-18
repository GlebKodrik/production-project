export type TRateArticleData = {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
};

export type TArticleArguments = { userId: string, articleId: string };
