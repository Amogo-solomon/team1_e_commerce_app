export const IncrementValue = (initialValue: number): number => {
  return ++initialValue;
};

export const DecrementValue = (initialValue: number): number => {
  if (initialValue > 1) {
    return --initialValue;
  }
  return 1;
};
