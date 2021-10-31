type stringOrrNumber = string | number;
type userObj = {
  name: string;
  id: number;
};

const userDetails = (id: stringOrrNumber, user: userObj) => {
  console.log(user);
};

const currentUser = (user: userObj) => {
  console.log(user);
};
