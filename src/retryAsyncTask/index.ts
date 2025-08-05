import asyncTryCatch from "../asyncTryCatch";

async function retryAsyncTask<T = unknown>(
  asyncTask: () => Promise<T>,
  maxRetries: number,
) {
  let currentRetries = 0;

  while (currentRetries <= maxRetries) {
    const [error, result] = await asyncTryCatch(asyncTask);
    if (error) {
      if (currentRetries === maxRetries) {
        throw error;
      } else {
        currentRetries++;
      }
    } else {
      return result;
    }
  }
}

export default retryAsyncTask;
