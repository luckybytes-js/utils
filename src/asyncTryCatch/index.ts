const asyncTryCatch = async <R, P extends unknown[]>(
  fn: (...args: P) => Promise<R>,
  ...args: P
): Promise<[undefined, R] | [Error]> => {
  try {
    const res = await fn(...args);
    return [undefined, res];
  } catch (e) {
    if (e instanceof Error) {
      return [e];
    }
    return [new Error(String(e))];
  }
};

export default asyncTryCatch;
