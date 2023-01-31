import { TUser } from '../../redux-stores/stores/user/types';

export enum EArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum EArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export type TArticleBase = {
  id?: string,
  type?: EArticleBlockType,
};

export type TArticleBlockCode = {
  type?: EArticleBlockType.CODE;
  code: string,
} & TArticleBase;

export type TArticleBlockText = {
  type?: EArticleBlockType.TEXT,
  title: string,
  paragraphs: string[],
} & TArticleBase;

export type TArticleBlockImage = {
  type?: EArticleBlockType.IMAGE,
  src: string,
  title: string
} & TArticleBase;

export type TArticleBlock = TArticleBlockCode | TArticleBlockText | TArticleBlockImage;

export type TArticle = {
  id: string,
  title: string,
  subtitle: string,
  img: string,
  views: number,
  createdAt: string,
  type: EArticleType[],
  blocks: TArticleBlock[],
  user: TUser
};
