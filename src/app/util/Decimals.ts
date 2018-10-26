export class Decimals {

    static remove(value: number): number {
        return Decimals.fix(value, 0);
    }


    static onlyTwo(value: number): number {
        return Decimals.fix(value, 2);
    }

    
    static fix(value, decimal): number {
        return +(value.toFixed(decimal));
    }
            
}
