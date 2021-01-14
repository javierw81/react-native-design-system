import * as React from 'react'
import { mount } from 'enzyme'
import { themeMock } from './mocks/theme'
import { ThemeProvider } from 'styled-components/native';
import { Title, Subtitle, View } from "../src"

describe('Title', () => {

    it('Title render is success', () => {
        const wrapper = mount(
            <ThemeProvider theme={themeMock}>
                <View>
                    <Title testID="title_test">Hello Title</Title>
                    <Subtitle testID="subtitle_test">Hello Subtitle</Subtitle>
                </View>
            </ThemeProvider>
        );

        expect(wrapper.findWhere(node => node.prop('testID') === 'title_test')).toBeTruthy()
        expect(wrapper.findWhere(node => node.prop('testID') === 'subtitle_test')).toBeTruthy()
    })

})


