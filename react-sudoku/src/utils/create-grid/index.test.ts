import { GRID } from "typings";

import createFullGrid from ".";

describe('createFullGrid', () => {
    it('it fills a full grid', () => {
        const grid = createFullGrid()
        for (const row in grid) {
            for (const col in grid) {
                expect(grid[row][col]).toBeGreaterThanOrEqual(1)
                expect(grid[row][col]).toBeLessThanOrEqual(9)
            }
        }
    })
})