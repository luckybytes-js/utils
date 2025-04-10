# isFullURL

判断给定的字符串是否是一个完整的HTTP/HTTPS URL

## 参数

- `url: string` &mdash; 需要检查的URL字符串

## 返回值

boolean

## 使用示例

```typescript
import isFullURL from "./isFullURL";

isFullURL("http://example.com");
// => true

isFullURL("https://example.com");
// => true;

isFullURL("//example.com");
// => false;
```
