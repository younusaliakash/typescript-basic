let add: (x: number, y: number) => number;

add = (s: number, d: number) => {
  return s + d;
};

let calculate: (x: number, y: number, z: string) => number;

calculate = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

calculate(1, 2, "add");
