import isFullURL from "../index";

describe("isFullURL", () => {
  it("正确的完整的HTTP/HTTPS URL", () => {
    expect(isFullURL("http://example.com")).toBe(true);
    expect(isFullURL("https://example.com")).toBe(true);
  });

  it("错误的完整HTTP/HTTPS URL", () => {
    expect(isFullURL("//example.com")).toBe(false);
  });
});
