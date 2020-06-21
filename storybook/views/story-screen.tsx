/* eslint-disable max-len */
import * as React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'

export interface StoryScreenProps {
  children?: React.ReactNode
}

const behavior = Platform.OS === 'ios' ? 'padding' : null
export const StoryScreen: React.FC<StoryScreenProps> = (props: StoryScreenProps) => (
  <KeyboardAvoidingView style={styles.ROOT} behavior={behavior} keyboardVerticalOffset={50}>
    {// @ts-ignore
      props.children ? props.children : null}
  </KeyboardAvoidingView>
)
const styles = StyleSheet.create({
  ROOT: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
})
