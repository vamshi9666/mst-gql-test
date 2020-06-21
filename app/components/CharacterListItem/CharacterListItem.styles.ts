import {ViewStyle, TextStyle} from 'react-native';
import {color, typography} from '../../theme';

export const characterListItemStyles = {
  WRAPPER: {
    justifyContent: 'center',
  } as ViewStyle,
  TEXT: {
    fontFamily: typography.primary,
    fontSize: 14,
    color: color.primary,
  } as TextStyle,
  PERSON_ITEM: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: color.palette.white,
    shadowRadius: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  } as ViewStyle,
};
