interface Person {
  name: string;
  male?: boolean;

  [key: string]: any;

  greet(a: string): void;
}

function greet(person: Person) {
  console.log(person.name);
}

const person: Person = {
  name: 'myName',
  // male: true,
  hobbies: ['hobbie1', 'hobbie2'],
  greet(oneName: string): void {
    console.log(`hello ${oneName}`);
  },
};

greet(person);

// ---------------------------------------------------------------------------------------------------
// Class
// ---------------------------------------------------------------------------------------------------
class CPerson implements Person {
  name: string;

  greet(anyName: string): void {
    console.log(`hello from class ${anyName} I am ${this.name}`);
  }

}

const classPerson = new CPerson();
classPerson.name = 'My Name';
classPerson.greet('Some name');

// ---------------------------------------------------------------------------------------------------
// Inheritance
// ---------------------------------------------------------------------------------------------------
interface AgedPerson extends Person {
  age: number;
}

const aged: AgedPerson = {
  ...person,
  age: 22,
};

// ---------------------------------------------------------------------------------------------------
// Extend
// ---------------------------------------------------------------------------------------------------
interface Box {
  x: number;
  y: number;
}

interface Box {
  z: number;
}

const theBox: Box = { x: 1, y: 2, z: 3, a: 5 } as Box;

function testBox(param: Box) {
  console.log(param);
}

testBox({ x: 0, y: 1, z: 2 });

// ---------------------------------------------------------------------------------------------------
// Extra
// ---------------------------------------------------------------------------------------------------

// BAD
interface PropsBAD extends OwnProps1, StoreProps1 {
}

type OwnProps1 = {}
type StoreProps1 = {}

// GOOD
type PropsGOOD = OwnProps2 & StoreProps2
type OwnProps2 = {}
type StoreProps2 = {}
