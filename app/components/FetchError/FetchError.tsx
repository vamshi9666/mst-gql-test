import React, {FunctionComponent as Component} from 'react';
import {View} from 'react-native';
import {Text} from '../';
// import { observer } from "mobx-react-lite"
// import { useStores } from "../../models"
import {fetchErrorStyles as styles} from './FetchError.styles';
import {useObserver} from 'mobx-react-lite';

export interface FetchErrorProps {}

/**
 * This is a React functional component, ready to
 *
 * Component description here for TypeScript tips.
 */
export const FetchError: Component<FetchErrorProps> = (props) => {
  return useObserver(() => (
    <View style={styles.WRAPPER}>
      <Text>Error Fetching </Text>
    </View>
  ));
};
