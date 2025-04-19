const getOrCreate = <T extends object, K extends keyof T>(
  target: T,
  key: K,
  defaultValue: T[K] | (() => T[K]),
) => {
  if (!(key in target)) {
    target[key] =
      typeof defaultValue === "function"
        ? (defaultValue as () => T[K])()
        : defaultValue;
  }
  return target[key];
};

export default getOrCreate;
