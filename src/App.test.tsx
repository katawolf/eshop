import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import App from './App';

jest.mock('./components/HomeComponent', () => () => <div data-testid={'home-component'}>HomeComponent</div>)

describe('App component', () => {

    let app: RenderResult

    beforeEach(() => {
        app = component()
    })
    test('should display home component', () => {
        expect(app.queryByTestId('home-component')).not.toBeNull()
    })
});

const component = () => render(<App/>)
