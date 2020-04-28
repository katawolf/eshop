import {HomeComponent} from "./HomeComponent";
import {render, RenderResult} from "@testing-library/react";
import React from "react";

describe('HomeComponent spec', () => {

    describe('On init', () => {

        let homeComponent: RenderResult;

        beforeAll(() => {
            homeComponent = componet();
        })

        test('Should load component', () => {
            expect(homeComponent.queryByTestId('HomeComponent')).toBeDefined();
        })
    })
})

const componet = () => render(<HomeComponent/>)