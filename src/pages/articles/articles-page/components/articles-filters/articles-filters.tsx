import React, { useEffect } from 'react';
import { Select, TOptions } from 'shared-components/select';
import { useSelector } from 'react-redux';
import {
  getOrder, getSearch, getSortBy, getVariantView,
} from 'redux-stores/stores/articles/selectors';
import { articleActions, EArticlesSort } from 'redux-stores/stores/articles';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { TVariantView } from 'shared-components/article-card';
import { Search } from 'feature/search';
import cn from 'classnames';
import { Icon } from 'shared-components/icon';
import { ORDER } from 'constants/sort-order';
import { useLanguage } from 'hooks/use-language';
import { requestGetArticles } from 'redux-stores/stores/articles/requests/request-get-articles';
import { useDebounce } from 'hooks/use-debounce';
import { Tabs } from 'shared-components/tabs';

import { getType } from 'redux-stores/stores/articles/selectors/get-filters';
import { TArticlesTypes } from 'redux-stores/stores/types/articles';
import { Link } from 'shared-components/link';
import { ROUTES_PATH } from 'constants/routers';
import { Button } from 'shared-components/button';
import { ArticleVariantView } from '../article-variant-view';
import styles from './articles-filters.module.scss';
import { TProps, TTabs } from './types';

export const ArticlesFilters = ({ setSearchParams, isLoadingGetArticles }: TProps) => {
  const { translation } = useLanguage();
  const variantView = useSelector(getVariantView);
  const search = useSelector(getSearch);
  const order = useSelector(getOrder);
  const sortBy = useSelector(getSortBy);
  const dispatch = useAppDispatch();
  const type = useSelector(getType);
  const isOrderByDesc = order === ORDER.DESC;
  const orderBy = order === ORDER.DESC ? ORDER.ASC : ORDER.DESC;

  const TABS: TTabs[] = [
    { name: 'all', content: translation('sort.types.all') },
    { name: 'it', content: translation('sort.types.it') },
    { name: 'science', content: translation('sort.types.science') },
    { name: 'economics', content: translation('sort.types.economics') },
  ];

  const OPTIONS: TOptions[] = [
    { value: EArticlesSort.CREATED_AT, content: translation('sort.date') },
    { value: EArticlesSort.TITLE, content: translation('sort.name') },
    { value: EArticlesSort.VIEWS, content: translation('sort.views') },
  ];
  const setSortArticles = () => {
    dispatch(requestGetArticles({ page: 1 }));
    dispatch(articleActions.clearArticles());
  };

  const changeSearchDebounce = useDebounce(setSortArticles);

  const onSortByChange = (value: EArticlesSort) => {
    dispatch(articleActions.setSortBy(value));
    setSortArticles();
  };

  const onChangeView = (name: TVariantView) => {
    dispatch(articleActions.setVariantView(name));
  };

  const onSearchChange = (value: string) => {
    dispatch(articleActions.setSearch(value));
    changeSearchDebounce();
  };

  const onOrderClick = () => {
    dispatch(articleActions.setOrder(orderBy));
    setSortArticles();
  };

  const onTypeChange = (name: string) => {
    dispatch(articleActions.setType(name as TArticlesTypes));
    setSortArticles();
  };

  useEffect(() => {
    setSearchParams({
      search, order, sort: sortBy, type,
    });
  }, [search, order, sortBy, type]);

  return (
    <>
      <div className={styles.wrapperFilters}>
        <Select
          onChange={onSortByChange}
          value={sortBy}
          options={OPTIONS}
          label={translation('sort.sortBy')}
          disabled={isLoadingGetArticles}
        />
        <ArticleVariantView
          variantView={variantView}
          onClick={onChangeView}
          color="secondary"
        />
      </div>
      <div className={styles.wrapperDown}>
        <Button
          onClick={onOrderClick}
          color="secondary"
          disabled={isLoadingGetArticles}
        >
          <Icon
            fill="primary"
            name="sort-up"
            className={cn(
              styles.icon,
              { [styles.revertIcon]: isOrderByDesc },
            )}
          />
        </Button>
        <div className={styles.wrapperSearch}>
          <Search value={search} onChange={onSearchChange} />
        </div>
      </div>
      <div className={styles.wrapperTabsWithIcon}>
        <div className={styles.tabs}>
          <Tabs
            tabs={TABS}
            onClick={onTypeChange}
            activeTab={type}
            disabled={isLoadingGetArticles}
          />
        </div>
        <Link to={ROUTES_PATH.ARTICLE_DETAIL_NEW}>
          <Icon name="create" />
        </Link>
      </div>
    </>
  );
};
