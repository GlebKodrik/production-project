import React from 'react';
import { TIconNames } from '../types';
import Home from '../images/home.svg';
import ClarityList from '../images/clarity-list.svg';
import CheckCircleOutline from '../images/check-circle-outline.svg';
import CloseCircleOutline from '../images/close-circle-outline.svg';
import ErrorOutline from '../images/error-outline.svg';
import ThemeDark from '../images/theme-dark.svg';
import ThemeLight from '../images/theme-light.svg';
import Profile from '../images/profile.svg';
import Article from '../images/article-20-20.svg';
import Calendar from '../images/calendar-20-20.svg';
import Eye from '../images/eye-20-20.svg';
import Copy from '../images/copy-20-20.svg';
import List from '../images/list-24-24.svg';
import Tiled from '../images/tiled-24-24.svg';
import SortUp from '../images/sort_ascending_icon_151090.svg';
import Redactor from '../images/file_document_edit_outline_icon_139608.svg';
import Create from '../images/create.svg';

import { ICON_NAMES } from './icon-names';

export const ICONS_COMPONENT: Record<TIconNames, React.VFC<React.SVGProps<SVGSVGElement>>> = {
  [ICON_NAMES.HOME]: Home,
  [ICON_NAMES.CLARITY_LIST]: ClarityList,
  [ICON_NAMES.CHECK_CIRCLE_OUTLINE]: CheckCircleOutline,
  [ICON_NAMES.CLOSE_CIRCLE_OUTLINE]: CloseCircleOutline,
  [ICON_NAMES.ERROR_OUTLINE]: ErrorOutline,
  [ICON_NAMES.THEME_LIGHT]: ThemeLight,
  [ICON_NAMES.THEME_DARK]: ThemeDark,
  [ICON_NAMES.ERROR_OUTLINE]: ErrorOutline,
  [ICON_NAMES.PROFILE]: Profile,
  [ICON_NAMES.ARTICLES]: Article,
  [ICON_NAMES.CALENDAR]: Calendar,
  [ICON_NAMES.EYE]: Eye,
  [ICON_NAMES.COPY]: Copy,
  [ICON_NAMES.LIST]: List,
  [ICON_NAMES.TILED]: Tiled,
  [ICON_NAMES.SORT_UP]: SortUp,
  [ICON_NAMES.REDACTOR]: Redactor,
  [ICON_NAMES.CREATE]: Create,
};
