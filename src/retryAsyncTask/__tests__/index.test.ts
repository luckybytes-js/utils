import retryAsyncTask from "../index";

describe("retryAsyncTask", () => {
  it("第一次即成功，直接返回结果，不需要重试", async () => {
    const mock = jest.fn().mockResolvedValueOnce("success");
    const result = await retryAsyncTask(mock, 3);

    expect(result).toBe("success");
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("重试第二次成功", async () => {
    const mock = jest
      .fn()
      .mockRejectedValueOnce(new Error("失败"))
      .mockRejectedValueOnce(new Error("重试第一次失败"))
      .mockResolvedValueOnce("success");
    const result = await retryAsyncTask(mock, 3);

    expect(result).toBe("success");
    expect(mock).toHaveBeenCalledTimes(3);
  });

  it("重试全部失败", async () => {
    const mock = jest
      .fn()
      .mockRejectedValueOnce(new Error("失败"))
      .mockRejectedValueOnce(new Error("重试第一次失败"))
      .mockRejectedValueOnce(new Error("重试第二次失败"))
      .mockRejectedValueOnce(new Error("重试第三次失败"));

    await expect(retryAsyncTask(mock, 3)).rejects.toThrow("重试第三次失败");
    expect(mock).toHaveBeenCalledTimes(4);
  });
});
