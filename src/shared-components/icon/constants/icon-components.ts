import { TIconNames } from 'shared-components/icon';
import React from 'react';
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
  [ICON_NAMES.ARTICLE]: Article,
  [ICON_NAMES.CALENDAR]: Calendar,
  [ICON_NAMES.EYE]: Eye,
  [ICON_NAMES.COPY]: Copy,
};
