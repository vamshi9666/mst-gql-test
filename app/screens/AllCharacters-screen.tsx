import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, ActivityIndicator, ScrollView } from "react-native"
import { Screen, Text, Header, FetchError, CharacterListItem } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color } from "../theme"
import { useQuery } from "../models/reactUtils"
import { spacing } from "../theme/spacing"
// import {  } from "../utils/storage"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}
const TITLE: TextStyle = {
  fontSize: 24,
  textAlign: "left",
  fontWeight: "bold",
}
const CHARACTERS_LIST: ViewStyle = {
  padding: spacing[3],
}

export const AllCharactersScreen: Component = observer(function AllCharactersScreen() {
  const { data, error, loading } = useQuery(store =>
    store.queryAllPeople({}, s => s.people(a => a.name.eyeColor.height.gender)),
  )
  console.tron.logImportant("people result ", error, loading, data)
  return (
    <Screen style={ROOT} preset="scroll">
      <Header headerTx={"allCharactersScreen.header"} titleStyle={TITLE} />
      {loading ? (
        <ActivityIndicator size={"large"} color={"grey"} />
      ) : error ? (
        <FetchError />
      ) : (
        <ScrollView contentContainerStyle={CHARACTERS_LIST}>
          {data.allPeople.people.map((char, charIndex) => (
            <CharacterListItem key={charIndex} item={char} />
          ))}
        </ScrollView>
      )}
    </Screen>
  )
})
