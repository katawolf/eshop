import {formatPrice} from "./format.service";

describe('format service', () => {
    describe('format price', () => {
        test('should format price', () => {
            expect(
                formatPrice({
                    value: 125,
                    currency: 'EUR'
                })
            ).toBe('125 €')
        })
    })
})