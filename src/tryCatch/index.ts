const tryCatch = <R, P extends unknown[]>(
  fn: (...args: P) => R,
  ...args: P
): [undefined, R] | [Error] => {
  try {
    const res = fn(...args);
    return [undefined, res];
  } catch (e) {
    if (e instanceof Error) {
      return [e];
    }
    return [new Error(String(e))];
  }
};

export default tryCatch;
