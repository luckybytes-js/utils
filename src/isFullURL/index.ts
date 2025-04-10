import tryCatch from "../tryCatch";

const isFullURL = (url: string) => {
  const [error, result] = tryCatch(() => new URL(url));
  if (error) {
    return false;
  }

  return ["http:", "https:"].includes(result.protocol);
};

export default isFullURL;
