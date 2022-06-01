import { GRID } from "typings";

import createFullGrid from ".";

describe('createFullGrid', () => {
    it('returns a filled 9x9 grid with values from 1-9', () => {
        const grid = createFullGrid()
        for (const row in grid) {
            for (const col in grid) {
                expect(grid[row][col]).toBeGreaterThanOrEqual(1)
                expect(grid[row][col]).toBeLessThanOrEqual(9)
            }
        }
    })
})