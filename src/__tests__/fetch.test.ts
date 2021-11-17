import { getMeaning } from '../index';
test('getMeaning successfully return a result', () => {
    return getMeaning('language').then(data => {
        expect(data[0]).toBeTruthy()
    })
});