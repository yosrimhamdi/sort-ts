"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(i, j) {
        return this.data[i].toLocaleLowerCase() > this.data[j].toLocaleLowerCase();
    }
    swap(i, j) {
        const chars = this.data.split('');
        const temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
        this.data = chars.join('');
    }
}
exports.StringCollection = StringCollection;
