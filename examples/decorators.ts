// ---------------------------------------------------------------------------------------------------
// Class decorators
// ---------------------------------------------------------------------------------------------------
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log('hello');
  }
}

// ---------------------------------------------------------------------------------------------------
// Factory decorators
// ---------------------------------------------------------------------------------------------------
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {
}

// Useful decorator
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

// @logging(true)
@printable
class Plant {
  name = 'Im a plant';
}

const plant = new Plant();
(<any>plant).print();

// ---------------------------------------------------------------------------------------------------
// Method Decorator
// ---------------------------------------------------------------------------------------------------
function editable(value: boolean) {
  return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
    // PropertyDescriptor -> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty (vanilla js)
    descriptor.writable = value;
  };
}

class Project {
  name: string;

  constructor(pname: string) {
    this.name = pname;
  }

  @editable(false)
  calcBudget() {
    console.log(100);
  }
}

const project = new Project('project name');
console.log(project);
project.calcBudget(); // 100
project.calcBudget = function() {
  console.log(200);
};
project.calcBudget(); // 200

// ---------------------------------------------------------------------------------------------------
// Property Decorator
// ---------------------------------------------------------------------------------------------------
function overwritable(value: boolean) {
  return (target: any, propName: string): any => {
    const newDescriptor: PropertyDescriptor = {
      writable: value,
    };
    return newDescriptor;
  };
}

class Project2 {
  @overwritable(true)
  name: string;

  constructor(pname: string) {
    this.name = pname;
  }

}

const project2 = new Project2('project name 2');
console.log(project2);

// ---------------------------------------------------------------------------------------------------
// Parameter decorator
// ---------------------------------------------------------------------------------------------------
function printInfo(target: any, methodName: string, paramIndex: number) {
  const metadataKey = `__log_${methodName}_parameters`;
  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(paramIndex);
  } else {
    target[metadataKey] = [paramIndex];
  }
  // console.log('target', target);
  // console.log('methodName', methodName);
  // console.log('paramIndex', paramIndex);
}

function printInfoMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // console.log('descriptor', descriptor);
  const metadataKey = `__log_${methodName}_parameters`;
  const indices: number[] = target[metadataKey];
  const orgValue = descriptor.value;
  descriptor.value = function(...args) {
    indices.forEach((parameterI) => {
      console.log(`Method[${methodName}] arg[${parameterI}] value: ${args[parameterI]}`);
    });
    orgValue.apply(this, args);
  };
}

class Project3 {
  constructor(public name: string) {
  }

  @printInfoMethod
  print(@printInfo mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(mode, 1000);
    } else {
      console.log(mode, 4);
    }
  }
}

const project3 = new Project3('project name 3');
project3.print('some1', true);
project3.print('some2', false);

