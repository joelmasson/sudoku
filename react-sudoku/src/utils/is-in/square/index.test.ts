import { SQUARE } from "typings";

import IsInSquare from ".";

describe('IsInSquare', () => {
    it('it returns true if value is in square', () => {
        const square: SQUARE = [
            [8, 4, 2], [6, 5, 1], [3, 9, 7]
        ]
        expect(IsInSquare({ square, value: 9 })).toBeTruthy()
        expect(IsInSquare({ square, value: 1 })).toBeTruthy()
    })
    it('it returns false if value is not in square', () => {
        const square: SQUARE = [
            [8, 4, 2], [6, 5, 1], [3, 9, 7]
        ]
        expect(IsInSquare({ square, value: 0 })).toBeFalsy()
    })
})