import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../storybook/views';
import {CharacterListItem} from './CharacterListItem';

declare let module;

storiesOf('CharacterListItem', module)
    .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
    .add('Style Presets', () => (
      <Story>
        <UseCase text="Primary" usage="The primary.">
          <CharacterListItem text="CharacterListItem" />
        </UseCase>
      </Story>
    ));
