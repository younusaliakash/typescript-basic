// Explicite Types & Union Types

let myName: string = "Younus Ali Aksh";
myName = "Younus Ali";

let myNumber: number = 123456789;
myNumber = 987456123;

let myArrayOne: string[] = ["Akash", "batas", "Nodi"];
let myArrayTw0: number[] = [1, 2, 3];
let myArrayThree: boolean[] = [true, false];
let myArrayfour: (string | number)[] = ["akash", 5];

function mutiply(a: number, b: number) {
  return a * b;
}

console.log(mutiply(2, 4));

let myObject: object = {
  item: "1",
};

let myObejctTwo: {
  name: string;
  phone: number;
};

myObejctTwo = {
  name: "Akash",
  phone: 123456789,
};

// Dynamic type

let username: any;

username = "Dynamic String";
username = 5;
username = [];
username = {};
username = false;

let dArray: any[] = [1, "Akaash", true, {}, []];
