import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { FunctionComponent as Component, useCallback } from "react"
import { Image, ImageStyle, Platform, TextStyle, View, ViewStyle } from "react-native"
import { BulletItem, Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { colors } from "react-select/src/theme"
export const logoIgnite = require("./logo-ignite.png")
export const heart = require("./heart.png")

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  flex: 1,
}
const DEMO: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.primary,
  marginTop: "auto",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const DEMO_TEXT: TextStyle = {
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
}
const TAGLINE: TextStyle = {
  color: color.text,
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[4] + spacing[1],
}
const HINT: TextStyle = {
  color: color.dim,
  fontSize: 12,
  lineHeight: 15,
  marginVertical: spacing[2],
}

export const DemoScreen: Component = observer(function DemoScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const demoReactotron = useCallback(() => {
    navigation.navigate("allCharacters")
  }, [])
  return (
    <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
      <Header
        headerTx="demoScreen.howTo"
        leftIcon="back"
        onLeftPress={goBack}
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />
      <Text style={TITLE} preset="header" tx="demoScreen.title" />
      <Text style={TAGLINE} tx="demoScreen.tagLine" />
      <BulletItem text="Load up Reactotron!  You can inspect your app, view the events, interact, and so much more!" />
      <BulletItem text="Integrated here, Navigation with State, TypeScript, Storybook, Solidarity, and i18n." />
      <Button
        style={DEMO}
        textStyle={DEMO_TEXT}
        tx="demoScreen.reactotron"
        onPress={demoReactotron}
      />
      <Text style={HINT} tx={`demoScreen.${Platform.OS}ReactotronHint`} />
    </Screen>
  )
})
