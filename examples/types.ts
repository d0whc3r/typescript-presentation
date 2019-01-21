// string
let anyString = 'string';
anyString = 22;

// number
let anyNumber = 22;
anyNumber = 'string';

// boolean
let anyBool = false;
anyBool = 1;

// assigned types
let anyNum: number;
anyNum = 11;
anyNum = '12';

// array
let anyArray = ['string1', 'string2'];
anyArray = [10, 'a'];
anyArray = ['b'];

let anyArray2: any[] = ['string1', 'string2'];
anyArray2 = [10, 'a'];
anyArray2 = ['b'];
anyArray2 = 100;

// tuples
let tuple: [string, number] = ['string1', 33];
tuple = [33, 'string'];
let tuple2: [string, string] = ['string1', 'string2'];
tuple2 = ['string', 'string', 'string'];

// enum
enum Colors {
  BLACK, // 0
  RED = 22, // 22
  GREEN = 4, // 4
  BLUE = 'BLUE', // 'BLUE'
}

let color = Colors.BLUE; // color = 'BLUE'
color = Colors.BLACK; // color = 0
color = Colors.GREEN; // color = 4

// any
let some: any = 'some string';
some = 12;
some = { a: 'hello', b: 2 };

// functions
function returnString(): string {
  return anyNum;
}

// void
function noReturn(): void {
  console.log('a');
  return 'a';
}

// arg types
function plus(val1: number, val2: number): number {
  return val1 + val2;
}

console.log(plus(1, 'string'));
console.log(plus(1, 2));

// function type
let functVar: (a: number, b: number) => number;
functVar = noReturn;
functVar();
functVar = plus;
console.log(functVar(1, 4));

// object type
let userData: { name: string, age: number } = {
  name: 'myname',
  age: 22,
};

userData = {};
userData = {
  a: 'string',
  b: 11,
};

// complex object
let complex: { data: number[], output: (a: boolean) => number[] } = {
  data: [100, 3.3, 44],
  output: (info: boolean): number[] => this.data,
};

// type alias
type Complex = { data: number[], output: (a: boolean) => number[] };

let complex3: Complex = {
  data: [100, 3.3, 44],
  output: (info: boolean): number[] => this.data,
};

// Union types
let multiTypes: number | string = 55;
multiTypes = '22';
multiTypes = true;

// check types
let value = 'string';
if (typeof value === 'number') {
  // never here, because "value" is always a string, not a number
}

// never
function neverReturn(): never {
  throw new Error('error');
}

function neverReturn2(): never {
  while (true) {
  }
}

// Extra
class Point {
  x: number;
  y: number;
}

interface Shape {
  area(): number;
}

type Perimeter = {
  perimeter(): number;
}

type RectangleShape = Point & Shape & Perimeter;

class Rectangle implements RectangleShape {
  x = 0;
  y = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  area() {
    return this.x * this.y;
  }

  perimeter() {
    return 2 * (this.x + this.y);
  }
}

// Types
type TBox = {
  x: number;
  y: number;
}

type TBox = {
  z: number;
}

const theTBox: TBox = { x: 1, y: 2, z: 3 };

