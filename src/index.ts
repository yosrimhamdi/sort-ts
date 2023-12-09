import { LinkedList } from './LinkedList';

const list = new LinkedList();

list.add(100);
list.add(3);
list.add(-3);
list.add(4);

console.log(list.print());
console.log(list.sort());
console.log(list.print());
