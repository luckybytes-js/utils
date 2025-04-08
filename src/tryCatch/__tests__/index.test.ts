import tryCatch from "../index";

describe("tryCatch", () => {
  it("函数正确处理", () => {
    const successFn = (a: number) => a;
    const [error, result] = tryCatch(successFn, 1);

    expect(error).toBeUndefined();
    expect(result).toBe(1);
  });

  it("函数错误处理", () => {
    // 主动抛出Error
    const errorFn1 = () => {
      throw new Error("throw new Error");
    };
    const [error1] = tryCatch(errorFn1);
    expect(error1).toBeInstanceOf(Error);
    expect(error1!.message).toBe("throw new Error");

    // 错误的逻辑
    const errorFn2 = () => {
      // @ts-expect-error 估计调用不存在的函数，用于测试用例模拟Error，而非手动throw
      return "string".nofn();
    };
    const [error2] = tryCatch(errorFn2);
    expect(error2).toBeInstanceOf(Error);

    // throw 任意类型
    const errorFn3 = () => {
      throw {};
    };
    const [error3] = tryCatch(errorFn3);
    expect(error3).toBeInstanceOf(Error);
    expect(error3!.message).toBe(String({}));
  });
});
