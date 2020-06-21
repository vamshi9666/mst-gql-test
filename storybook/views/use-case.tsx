/* eslint-disable require-jsdoc */
import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

export interface UseCaseProps {
  /** The title. */
  text: string
  /** When should we be using this? */
  usage?: string
  /** The component use case. */
  children: React.ReactNode
  /** A style override. Rarely used. */
  style?: ViewStyle
  /** Don't use any padding because it's important to see the spacing. */
  noPad?: boolean
  /** Don't use background color because it's important to see the color. */
  noBackground?: boolean
}

export function UseCase(props: UseCaseProps) {
  return (
    <View style={styles.ROOT}>
      {props.usage ? <Text style={styles.USAGE}>{props.usage}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  ROOT: {
    backgroundColor: '#eee',
  },
  USAGE: {
    color: '#666',
    fontSize: 10,
    paddingTop: 0,
  },
})
