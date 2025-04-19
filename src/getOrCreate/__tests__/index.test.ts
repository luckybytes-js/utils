import getOrCreate from "../index";

describe("getOrCreate", () => {
  it("当键已存在时应返回现有值", () => {
    const obj = { key: "value" };
    const result = getOrCreate(obj, "key", "defaultValue");

    expect(result).toBe("value");
    expect(obj.key).toBe("value");
  });

  it("当键不存在时应设置并返回默认值（原始值）", () => {
    const obj: { key?: string } = {};
    const result = getOrCreate(obj, "key", "defaultValue");

    expect(result).toBe("defaultValue");
    expect(obj.key).toBe("defaultValue");
  });

  it("当键不存在时应设置并返回默认值（函数生成）", () => {
    const obj: { key?: string } = {};
    const result = getOrCreate(obj, "key", () => "defaultValue");

    expect(result).toBe("defaultValue");
    expect(obj.key).toBe("defaultValue");
  });

  it("当键存在时不应调用函数", () => {
    const mockFn = jest.fn(() => "defaultValue");
    const obj = { key: "value" };
    const result = getOrCreate(obj, "key", mockFn);

    expect(result).toBe("value");
    expect(mockFn).not.toHaveBeenCalled();
  });
});
