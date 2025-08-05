# retryAsyncTask

在异步任务失败时自动重试指定次数

## 参数

- `asyncTask: () => Promise<T>` &mdash; 异步任务函数
- `maxRetries: number` &mdash; 最大重试次数

## 返回值

- `Promise<T>` &mdash; 任务成功时返回结果，失败时抛出错误

## 使用示例

```typescript
import { retryAsyncTask } from '@luckybytes/utils';

retryAsyncTask(() => fetch("https://api.example.com"), 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```
