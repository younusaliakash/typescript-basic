let myfunc: Function;

myfunc = () => {
  console.log("this is function type");
};

let myfuncTwo = (a: string, b: string) => {
  console.log(`Hello ${a} and ${b}`);
};

myfuncTwo("Akash", "Batash");

let myfuncThree = (a: string, b: string, c?: string) => {
  console.log(`Hello ${a} and ${b}`);
};

myfuncThree("Akash", "Batash");

let myfuncFour = (a: string, b: string, c?: string): string => {
  return a + b;
};

myfuncFour("This ", "is me");
