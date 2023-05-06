const createRange = (value: number, startingValue: number = 0) => (
  Array.from({ length: value }, (_, number) => {
    const nextValue = number + 1;
    return nextValue + (startingValue ? startingValue - 1 : 0);
  })
);

export default createRange;
