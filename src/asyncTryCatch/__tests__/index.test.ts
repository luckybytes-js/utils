import asyncTryCatch from "../index";

describe("asyncTryCatch", () => {
  it("函数正确处理", async () => {
    const successFn = async (a: number) => a;
    const [error, result] = await asyncTryCatch(successFn, 1);

    expect(error).toBeUndefined();
    expect(result).toBe(1);
  });

  it("函数错误处理", async () => {
    // 主动抛出Error
    const errorFn1 = async () => {
      throw new Error("throw new Error");
    };
    const [error1] = await asyncTryCatch(errorFn1);
    expect(error1).toBeInstanceOf(Error);
    expect(error1!.message).toBe("throw new Error");

    // 错误的逻辑
    const errorFn2 = async () => {
      // @ts-expect-error 估计调用不存在的函数，用于测试用例模拟Error，而非手动throw
      return "string".nofn();
    };
    const [error2] = await asyncTryCatch(errorFn2);
    expect(error2).toBeInstanceOf(Error);

    // throw 任意类型
    const errorFn3 = async () => {
      throw {};
    };
    const [error3] = await asyncTryCatch(errorFn3);
    expect(error3).toBeInstanceOf(Error);
    expect(error3!.message).toBe(String({}));
  });
});
