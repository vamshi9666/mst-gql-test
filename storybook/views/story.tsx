import * as React from "react"
import { ScrollView, View } from "react-native"

export interface StoryProps {
  children?: React.ReactNode
}

export const Story: React.FC<StoryProps> = (props: StoryProps) => {
  return (
    <View style={styles.ROOT}>
      <ScrollView>{props.children}</ScrollView>
    </View>
  )
}

const styles = {
  ROOT: {
    flex: 1,
  },
}
