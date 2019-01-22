// ---------------------------------------------------------------------------------------------------
// Better generics
// ---------------------------------------------------------------------------------------------------
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('hello').length);
console.log(betterEcho<number>('33').length);
console.log(betterEcho({ name: 'my name', age: 22 }).length);

// ---------------------------------------------------------------------------------------------------
// Build-in generics
// ---------------------------------------------------------------------------------------------------
const testArray: Array<number> = [1, 2, 3.33];
testArray.push(-1.12);
testArray.push('asdf');

// ---------------------------------------------------------------------------------------------------
// Arrays
// ---------------------------------------------------------------------------------------------------
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

printAll<string>(['some', 'string', 'asfd']);
printAll<number>([1, 2, -32.44]);

// ---------------------------------------------------------------------------------------------------
// Generic types
// ---------------------------------------------------------------------------------------------------
const show: <T>(a: T) => T = (data) => data;
type GenericType = <T>(a: T) => T;
const show2: GenericType = betterEcho;

// ---------------------------------------------------------------------------------------------------
// Generic class
// ---------------------------------------------------------------------------------------------------
class SimpleClass<T extends (number | string)> {
  baseValue: T;
  multi: T;
  calc() {
    return +this.baseValue * +this.multi;
  }
}

const simple = new SimpleClass();
simple.multi = 10;
simple.baseValue = 3;
simple.calc(); // 30

simple.multi = '20';
simple.calc();

// ---------------------------------------------------------------------------------------------------
// More than one generic
// ---------------------------------------------------------------------------------------------------
class MultiClass<T, U extends (number | string)> {
  baseValue: T;
  multi: U;
  calc() {
    return +this.baseValue * +this.multi;
  }
}
const multi = new MultiClass<string, number>();
multi.baseValue = '20';
multi.multi = 20;


