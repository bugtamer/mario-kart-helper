export class Random {

    /**
     * Return an integer between 0 and upperLimit - 1.
     * @param upperLimit 
     */
    public static getInteger(upperLimit: number): number {
        return Math.floor(Math.random() * upperLimit);
    }
    
}
