import {ViewStyle, TextStyle} from 'react-native';
import {color, typography} from '../../theme';

export const fetchErrorStyles = {
  WRAPPER: {
    justifyContent: 'center',
  } as ViewStyle,
  TEXT: {
    fontFamily: typography.primary,
    fontSize: 14,
    color: color.primary,
  } as TextStyle,
};
