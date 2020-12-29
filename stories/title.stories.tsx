import * as React from "react"
import { storiesOf } from '@storybook/react-native';
import { Title, Subtitle, View } from "../src"

storiesOf("Titles", module)
    .add("Default", () =>
        <View>
            <Title>Hello Title</Title>
            <Subtitle>Hello Subtitle</Subtitle>
        </View>)
