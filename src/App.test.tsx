import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/HomeComponent', () => () => <div>HomeComponent</div>)

test('renders learn react link', () => {
  const { container } = render(<App />);
  const classElement = container.getElementsByClassName("App")
  expect(classElement.length).toEqual(1)
});
