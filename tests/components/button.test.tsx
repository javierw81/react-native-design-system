import * as React from 'react'
import { mount } from 'enzyme'
import { themeMock } from '../mocks/theme'
import { ThemeProvider } from 'styled-components/native';
import { Button, View } from "../../src"

describe('Button', () => {

    it('Button primary render is success', () => {
        const wrapper = mount(
            <ThemeProvider theme={themeMock}>
                <View>
                    <Button primary testID="button_test" title="Hello Button" onPress={() => alert('Hello!!')} > </Button>
                    <Button primary testID="button_outline_test" title="Hello Button" outline onPress={() => alert('Hello!!')}></Button>
                </View>
            </ThemeProvider>
        )

        expect(wrapper.findWhere(node => node.prop('testID') === 'button_test')).toBeTruthy()
        expect(wrapper.findWhere(node => node.prop('testID') === 'button_outline_test')).toBeTruthy()
    })


    it('Button secondary render is success', () => {
        const wrapper = mount(
            <ThemeProvider theme={themeMock}>
                <View>
                    <Button secondary testID="button_test" title="Hello Button" onPress={() => alert('Hello!!')} > </Button>
                    <Button secondary testID="button_outline_test" title="Hello Button" outline onPress={() => alert('Hello!!')}></Button>
                </View>
            </ThemeProvider>
        )

        expect(wrapper.findWhere(node => node.prop('testID') === 'button_test')).toBeTruthy()
        expect(wrapper.findWhere(node => node.prop('testID') === 'button_outline_test')).toBeTruthy()
    })

    it('Button warning render is success', () => {
        const wrapper = mount(
            <ThemeProvider theme={themeMock}>
                <View>
                    <Button warning testID="button_test" title="Hello Button" onPress={() => alert('Hello!!')} > </Button>
                    <Button warning testID="button_outline_test" title="Hello Button" outline onPress={() => alert('Hello!!')}></Button>
                </View>
            </ThemeProvider>
        )

        expect(wrapper.findWhere(node => node.prop('testID') === 'button_test')).toBeTruthy()
        expect(wrapper.findWhere(node => node.prop('testID') === 'button_outline_test')).toBeTruthy()
    })

    it('Button danger render is success', () => {
        const wrapper = mount(
            <ThemeProvider theme={themeMock}>
                <View>
                    <Button danger testID="button_test" title="Hello Button" onPress={() => alert('Hello!!')} > </Button>
                    <Button danger testID="button_outline_test" title="Hello Button" outline onPress={() => alert('Hello!!')}></Button>
                </View>
            </ThemeProvider>
        )

        expect(wrapper.findWhere(node => node.prop('testID') === 'button_test')).toBeTruthy()
        expect(wrapper.findWhere(node => node.prop('testID') === 'button_outline_test')).toBeTruthy()
    })

    it('Button success render is success', () => {
        const wrapper = mount(
            <ThemeProvider theme={themeMock}>
                <View>
                    <Button success testID="button_test" title="Hello Button" onPress={() => alert('Hello!!')} > </Button>
                    <Button success testID="button_outline_test" title="Hello Button" outline onPress={() => alert('Hello!!')}></Button>
                </View>
            </ThemeProvider>
        )

        expect(wrapper.findWhere(node => node.prop('testID') === 'button_test')).toBeTruthy()
        expect(wrapper.findWhere(node => node.prop('testID') === 'button_outline_test')).toBeTruthy()
    })

    it('Button info render is success', () => {
        const wrapper = mount(
            <ThemeProvider theme={themeMock}>
                <View>
                    <Button info testID="button_test" title="Hello Button" onPress={() => alert('Hello!!')} > </Button>
                    <Button info testID="button_outline_test" title="Hello Button" outline onPress={() => alert('Hello!!')}></Button>
                </View>
            </ThemeProvider>
        )

        expect(wrapper.findWhere(node => node.prop('testID') === 'button_test')).toBeTruthy()
        expect(wrapper.findWhere(node => node.prop('testID') === 'button_outline_test')).toBeTruthy()
    })

    it('Button light render is success', () => {
        const wrapper = mount(
            <ThemeProvider theme={themeMock}>
                <View>
                    <Button light testID="button_test" title="Hello Button" onPress={() => alert('Hello!!')} > </Button>
                    <Button light testID="button_outline_test" title="Hello Button" outline onPress={() => alert('Hello!!')}></Button>
                </View>
            </ThemeProvider>
        )

        expect(wrapper.findWhere(node => node.prop('testID') === 'button_test')).toBeTruthy()
        expect(wrapper.findWhere(node => node.prop('testID') === 'button_outline_test')).toBeTruthy()
    })

    it('Button dark render is success', () => {
        const wrapper = mount(
            <ThemeProvider theme={themeMock}>
                <View>
                    <Button dark testID="button_test" title="Hello Button" onPress={() => alert('Hello!!')} > </Button>
                    <Button dark testID="button_outline_test" title="Hello Button" outline onPress={() => alert('Hello!!')}></Button>
                </View>
            </ThemeProvider>
        )

        expect(wrapper.findWhere(node => node.prop('testID') === 'button_test')).toBeTruthy()
        expect(wrapper.findWhere(node => node.prop('testID') === 'button_outline_test')).toBeTruthy()
    })
})


