import { configure, getStorybookUI } from '@storybook/react-native'
import * as React from 'react'
import { initFonts } from '../app/theme/fonts'

declare let module

configure(() => {
  require('./storybook-registry')
}, module)

const StorybookUI = getStorybookUI({
  port: 9001,
  host: 'localhost',
  onDeviceUI: true,
  asyncStorage: require('react-native').AsyncStorage,
})

export const StorybookUIRoot: React.FC = () => {
  React.useEffect(() => {
    (async () => {
      await initFonts()

      // @ts-ignore
      if (typeof __TEST__ === 'undefined' || !__TEST__) {
        const Reactotron = require('../app/services/reactotron')
        const reactotron = new Reactotron.Reactotron()
        reactotron.setup()
      }
    })()
  }, [])

  return <StorybookUI />
}
