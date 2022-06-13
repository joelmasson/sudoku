import { GRID } from "typings";

import getTotals from ".";

describe('getTotals', () => {
    it('returns an array of objects, counting the number of values present', () => {
        const grid: GRID = [
            [0, 0, 0, 0, 0, 6, 7, 3, 0],
            [0, 6, 0, 0, 7, 0, 8, 0, 0],
            [0, 0, 2, 8, 5, 0, 4, 0, 0],
            [0, 0, 0, 3, 8, 4, 0, 0, 0],
            [6, 3, 8, 0, 9, 0, 0, 0, 1],
            [0, 0, 0, 0, 1, 5, 0, 0, 0],
            [9, 8, 0, 4, 0, 0, 0, 0, 0],
            [7, 0, 0, 5, 0, 0, 2, 0, 0],
            [0, 5, 6, 0, 0, 7, 0, 0, 0],
        ]
        expect(getTotals(grid)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    1: 2
                })
            ])
        )
    })
})