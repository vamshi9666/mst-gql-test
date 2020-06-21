import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import {Text} from '../';
import {
  characterListItemStyles as styles,
  characterListItemStyles,
} from './CharacterListItem.styles';
import {PeopleEdgeModelType, PersonModelType} from '../../models';

export interface CharacterListItemProps {
  /**
   * Text which is looked up via i18n.
   */

  item: PersonModelType
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */

export function CharacterListItem(props: CharacterListItemProps) {
  // grab the props
  const {item} = props;

  return (
    <View style={styles.PERSON_ITEM}>
      <Text> {item.name} </Text>
    </View>
  );
}
