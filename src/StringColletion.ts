import { Sorter } from './Sorter';

export class StringCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(i: number, j: number): boolean {
    return this.data[i].toLocaleLowerCase() > this.data[j].toLocaleLowerCase();
  }

  swap(i: number, j: number): void {
    const chars = this.data.split('');
    const temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
    this.data = chars.join('');
  }
}
