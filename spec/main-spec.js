const add = require('../main/main');

describe('main()', () => {

    it('should return added result', () => {
        let actual = add(1,1);
        expect(actual).toBe(2);
        expect(add(0,0)).toBe(0);
        expect(add(50,50)).toBe(100);
    });
});