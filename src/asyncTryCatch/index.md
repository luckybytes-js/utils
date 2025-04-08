# asyncTryCatch

安全执行给定异步函数，返回结果，同时捕获抛出的错误

## 参数

- `fn: (...args: P) => R` - 需要安全执行的函数
- `...args: P` - 传递给函数的参数

## 返回值

返回一个数组，可能是以下两种形式之一：
- `[undefined, R]` - 执行成功时返回，包含函数执行结果
- `[Error]` - 执行失败时返回，包含捕获的错误（始终是 Error 实例）

## 使用示例

```typescript
import { asyncTryCatch } from '@luckybytes/utils';

async function fn(x: number): Promise<number> {
  if (x > 10) {
    throw new Error("数值过大");
  }

  return x;
}

const [error1, result1] = await asyncTryCatch(fn, 5);
if (error1) {
  console.error(error1);
} else {
  console.log(result1);
  // => 5;
}

const [error2] = await asyncTryCatch(fn, 20);
if (error2) {
  console.error(error2);
  // => Error: 数值过大
}
```
