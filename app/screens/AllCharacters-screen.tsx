import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { FunctionComponent as Component } from "react"
import { ActivityIndicator, ScrollView, TextStyle, ViewStyle, View } from "react-native"
import { CharacterListItem, FetchError, Header, Screen } from "../components"
import { useQuery } from "../models/reactUtils"
import { color } from "../theme"
import { spacing } from "../theme/spacing"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}
const TITLE: TextStyle = {
  fontSize: 20,
}
const CHARACTERS_LIST: ViewStyle = {
  padding: spacing[3],
  justifyContent: "center",
}

export const AllCharactersScreen: Component = observer(function AllCharactersScreen() {
  const { data, error, loading } = useQuery(store =>
    store.queryAllPeople({}, s => s.people(a => a.name.eyeColor.height.gender)),
  )
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="fixed">
      <Header
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
        headerTx={"allCharactersScreen.header"}
        titleStyle={TITLE}
      />

      <ScrollView contentContainerStyle={CHARACTERS_LIST}>
        {loading ? (
          <ActivityIndicator size={"large"} color={"grey"} />
        ) : error ? (
          <FetchError />
        ) : (
          <>
            {data.allPeople.people.map((char, charIndex) => (
              <CharacterListItem key={charIndex} item={char} />
            ))}
          </>
        )}
      </ScrollView>
    </Screen>
  )
})
