import { GRID } from "typings";

import isInRow from ".";

describe('IsInRow', () => {
    it('it returns true if value is in row', () => {
        const grid: GRID = [
            [8, 4, 2, 6, 5, 1, 3, 9, 7],
            [5, 3, 7, 2, 8, 9, 6, 4, 1],
            [6, 9, 1, 7, 3, 4, 5, 2, 8],
            [1, 6, 3, 8, 4, 5, 9, 7, 2],
            [7, 5, 8, 1, 9, 2, 4, 6, 3],
            [9, 2, 4, 3, 7, 6, 1, 8, 5],
            [4, 7, 6, 5, 1, 8, 2, 3, 9],
            [2, 8, 5, 9, 6, 3, 7, 1, 4],
            [3, 1, 9, 4, 2, 7, 8, 5, 6],
        ]
        expect(isInRow({ row: 0, grid, value: 9 })).toBeTruthy()
        expect(isInRow({ row: 5, grid, value: 1 })).toBeTruthy()
    })
    it('it returns false if value is not in row', () => {
        const grid: GRID = [
            [8, 4, 2, 6, 5, 1, 3, 0, 7],
            [5, 3, 7, 2, 8, 0, 6, 4, 1],
            [6, 9, 1, 7, 3, 4, 5, 2, 8],
            [1, 6, 3, 8, 4, 5, 9, 7, 2],
            [7, 5, 8, 1, 9, 2, 4, 6, 3],
            [0, 2, 4, 3, 7, 6, 1, 8, 5],
            [4, 7, 6, 5, 1, 8, 2, 3, 9],
            [2, 8, 5, 9, 6, 3, 7, 1, 4],
            [3, 1, 9, 4, 2, 7, 8, 5, 6],
        ]
        expect(isInRow({ row: 0, grid, value: 9 })).toBeFalsy()
        expect(isInRow({ row: 5, grid, value: 9 })).toBeFalsy()
    })
})