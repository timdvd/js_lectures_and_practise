/*

    There are two types of object properties:

    Data properties
    These are the properties we've been working with so far. All the properties we've used up to this point are data properties.

    Accessor properties
    These are properties we haven't explored yet. Accessor properties are essentially functions used 
    to assign and retrieve values, but to external code, they appear as regular object properties.

    Getters and Setters
    Accessor properties are represented by methods:

    A getter for reading the value.
    A setter for writing the value.
    When defining an object literally, they are declared using get and set:

*/


let obj = {
    get propName() {
      // геттер, срабатывает при чтении obj.propName
    },
  
    set propName(value) {
      // сеттер, срабатывает при записи obj.propName = value
    }
  };

let user = {
    firstName: "John",
    lastName: "Doe",
  
    // getter
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    // setter
    set fullName(value) {
      [this.firstName, this.lastName] = value.split(" ");
    }
  };
  
  // Using the getter
  console.log(user.fullName); // "John Doe"
  
  // Using the setter
  user.fullName = "Jane Smith";
  console.log(user.firstName); // "Jane"
  console.log(user.lastName);  // "Smith"


  let user1 = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName запустится с данным значением
  user1.fullName = "Alice Cooper";
  
  alert(user1.name); // Alice
  alert(user1.surname); // Cooper

/*

    Accessor property descriptors differ from those of "regular" data properties.

    Accessor properties do not have value or writable, but instead provide get and set functions.

    An accessor descriptor can include the following:

    get – a function without arguments that is called when the property is read.
    set – a function with one argument that is called when the property is assigned a value.
    enumerable – the same as for data properties; determines if the property shows up during enumeration.
    configurable – the same as for data properties; determines if the property can be deleted or modified.

*/

let user = {
    firstName: "John",
    lastName: "Doe"
  };
  
  // Define an accessor property "fullName"
  Object.defineProperty(user, "fullName", {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      [this.firstName, this.lastName] = value.split(" ");
    },
    enumerable: true,
    configurable: true
  });
  
  console.log(user.fullName); // "John Doe"
  
  user.fullName = "Jane Smith";
  console.log(user.firstName); // "Jane"
  console.log(user.lastName);  // "Smith"