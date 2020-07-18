export class RowDataTable {

  constructor(
    public key      : string = 'N/A',
    public value    : number = 0,
    public maxValue : number = 5.75
  ) { }

  get rate() {
    return this.value / this.maxValue * 100;
  }

}
