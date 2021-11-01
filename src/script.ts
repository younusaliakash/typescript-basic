interface APIResonse<T> {
  status: number;
  type: number;
  data: T;
}

const responseOne: APIResonse<object> = {
  status: 200,
  type: 1,
  data: {},
};

// enums

enum Rtype {
  SUCCES,
  FAIL,
}

interface APIResonseTwo<T> {
  status: number;
  type: Rtype;
  data: T;
}

const responseTwo: APIResonseTwo<object> = {
  status: 200,
  type: Rtype.SUCCES,
  data: {},
};

console.log(responseTwo);
