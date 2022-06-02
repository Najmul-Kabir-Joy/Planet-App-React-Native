import { colors } from '../colors/colors';
import { typography } from '../typography/typography';

export interface TextPresetTypes {
  default: {};
  bold: {};
  h1: {};
  h2: {};
  h3: {};
  h4: {};
  small: {};
}

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.white,
};

const BASE_BOLD = {
  ...BASE,
  fontFamily: typography.primaryBold,
};

const BOLD = {
  ...BASE,
  fontFamily: typography.bold,
};

export const textPresets: TextPresetTypes = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
