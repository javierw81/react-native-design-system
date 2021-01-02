import * as React from "react"
import { storiesOf } from '@storybook/react-native';
import { Button, View, Subtitle } from "../src"

storiesOf("Button", module)
    .add("Normal", () =>
        <View>
            <Subtitle>primary </Subtitle>
            <Button primary title="Hello Button" onPress={() => alert('Hello!!')} >
            </Button>
            <Subtitle>Secondary</Subtitle>
            <Button secondary title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Success</Subtitle>
            <Button success title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Danger</Subtitle>
            <Button danger title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Warning</Subtitle>
            <Button warning title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Info</Subtitle>
            <Button info title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Light</Subtitle>
            <Button light title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Dark</Subtitle>
            <Button dark title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
        </View>)
    .add("Outline", () =>
        <View>
            <Subtitle>primary </Subtitle>
            <Button primary title="Hello Button" outline onPress={() => alert('Hello!!')}></Button>
            <Subtitle>Secondary</Subtitle>
            <Button secondary outline title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Success</Subtitle>
            <Button success outline title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Danger</Subtitle>
            <Button danger outline title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Warning</Subtitle>
            <Button warning outline title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Info</Subtitle>
            <Button info outline title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Light</Subtitle>
            <Button light outline title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
            <Subtitle>Dark</Subtitle>
            <Button dark outline title="Hello Button" onPress={() => alert('Hello!!')} ></Button>
        </View>)