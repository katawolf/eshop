import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import App from './App';

jest.mock('./components/Home', () => () => <div data-testid={'home'}>Home</div>)

describe('App component', () => {

    let app: RenderResult

    beforeEach(() => {
        app = component()
    })
    test('should display home component', () => {
        expect(app.queryByTestId('home')).not.toBeNull()
    })
})

const component = () => render(<App/>)
