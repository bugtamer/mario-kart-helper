import { Random } from './random'; 

// https://codecraft.tv/courses/angular/unit-testing/classes-and-pipes/
// describe(){ ... } test suite function to hold all our individual test specs
describe('Random', () => {

    const UPPER_LIMIT: number = 10;
    const LOTS_OF_ATTEMPTS: number = 1000;
    let lowerThanArgument: boolean = true;
    

    it('getInteger(n) should always return a lower number than in the argument given', () => {
        for (let attempts = 0;   attempts < LOTS_OF_ATTEMPTS;   attempts++) {
            let rnd = Random.getInteger(UPPER_LIMIT);
            if (rnd >= UPPER_LIMIT) {
                lowerThanArgument = false;
                break;
            }
        }
        expect( lowerThanArgument ).toBeTruthy();
    });

});
