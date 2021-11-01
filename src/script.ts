interface SqureOption {
  height: number;
  width: number;
}

const createSqure = (option: SqureOption) => {
  console.log(
    `The Squre Height is ${option.height} and width is ${option.width}`
  );
};

createSqure({
  height: 20,
  width: 20,
});
