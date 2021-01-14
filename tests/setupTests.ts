import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src: any, target: NodeJS.Global & typeof globalThis) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);

function suppressDomErrors() {
    const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser|PascalCase)/;
    // eslint-disable-next-line no-console
    const realConsoleError = console.error;
    // eslint-disable-next-line no-console
    console.error = message => {
        if (message.match(suppressedErrors)) {
            return;
        }
        realConsoleError(message);
    };
}
suppressDomErrors()

Enzyme.configure({ adapter: new Adapter() });

jest.mock('global', () => ({
    ...global,
    WebSocket: function WebSocket() { },
}));