# getOrCreate

对象取值，如果没有对应的键，以默认值创建并返回默认值

## 参数

- `target: T` &mdash; 目标对象
- `key: K` &mdash; 要获取的属性键
- `defaultValue: T[K] | (() => T[K])` &mdash; 当属性不存在时使用的默认值或默认值生成函数

## 返回值

T[K]

## 使用示例

```typescript
import getOrCreate from "./getOrCreate";

const obj: Record<string, string> = {};

getOrCreate(obj, "key", "value");
// => "value"

getOrCreate(obj, "key", "value1");
// => "value"

getOrCreate(obj, "key1", () => "value1");
// => "value1"
```
